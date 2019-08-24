import { Observable, of,  concat, combineLatest } from 'rxjs';
import { exhaustMap, catchError, map, filter, flatMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, Action, select } from '@ngrx/store';
import { NGXLogger } from 'ngx-logger';

import { State } from '../reducers';
import { CourseService } from '../services/course.service';
import { ExerciseService } from '../services/exercise.service';

import * as FromPref from '../reducers/pref.reducer';
import * as FromPractice from '../reducers/practice.reducer';
import * as FromMedia from '../reducers/media.reducer';
import * as MediaActions from '../actions/media.actions';
import * as PracticeActions from '../actions/practice.actions';

import { speakers, Speaker } from '../models/speaker';
import { Course, Exercise, Scale } from '../models/models';
import { ExerciseContent, PracticeContent } from '../models/practice-content';

@Injectable()
export class PracticeContentEffects {
  play$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.play),
      exhaustMap(_ => this.onMediaPlay$())));

  constructor(
    private actions$: Actions,
    private logger: NGXLogger,
    private store: Store<State>,
    private courseService: CourseService,
    private exerciseService: ExerciseService) {

    }
    private onMediaPlay$(): Observable<Action> {
      const actions$ = concat(
        of(MediaActions.startLoading()),
        this.loadContent$().pipe(map(content => PracticeActions.loadContent({ content })),
          catchError(error => of(
            MediaActions.reportError({ error }),
            MediaActions.stop()))),
        of(MediaActions.stopLoading()));
        return actions$;
    }
    private loadContent$(): Observable<any> {
            return combineLatest([
        this.courseService.entities$,
        this.exerciseService.entities$,
        this.store.pipe(select(FromPref.selectFeature)),
        this.store.pipe(select(FromMedia.selectFeature)),
        this.store.pipe(select(FromPractice.selectFeature))
      ]).pipe(
        filter(results =>  results.every(result => result)),
        take(1),
        flatMap(([allCourses, allExercises, pref, media, practice]) =>
          this.compileContent$(allCourses, allExercises, pref, practice)));
    }
    private compileContent$(
      courses: Course[],
      exercises: Exercise[],
      pref: FromPref.State,
      practice: FromPractice.State): Observable<PracticeContent> {

      const name = practice.selectedCourseName;
      const course = courses.find(c => c.name === name);
      if (!course) { throw Error(`Course "${name}" is not found.`); }

      const exerciseSet = practice.exerciseSets.find(s => s.courseName === name);
      if (!exerciseSet) { throw Error(`Exercise set "${name}" is not found.`); }

      const content = <PracticeContent>{
        pref,
        course,
        speaker: this.pickSpeaker(pref),
        exercises: this.buildExerciseContents(exercises, exerciseSet),
      };
      return of(content);
    }

    private pickSpeaker(pref: FromPref.State): Speaker {
      if (pref.speaker.voice) { return pref.speaker; }
      return speakers[Math.floor(Math.random() * speakers.length)];
    }

    private buildExerciseContents(
      exercises: Exercise[], exerciseSet: FromPractice.ExerciseSet): ExerciseContent[] {
      const activations = exerciseSet.exerciseActivations;
      const activatedExercises: ExerciseContent[] = [];
      for (const exerciseName in activations) {
        if (activations[exerciseName]) {
          const exercise = exercises.find(e => e.name === exerciseName);
          if (exercise) {
            activatedExercises.push({
              exercise, scales: this.buildScales(exercise)
            });
          }
        }
      }
      return activatedExercises;
    }

    private buildScales(exercise: Exercise): Scale[] {
      const total = exercise.scales.length;
      const count = Math.floor(exercise.ratio * total);

      let selection: number;
      const selections = new Set<number>();
      for (let index = 0; index < count; ++index) {
        while (true) {
          selection = Math.floor(Math.random() * total);
          if (!selections.has(selection)) { break; }
        }
        selections.add(selection);
      }
      return [...selections].map(index => exercise.scales[index]);
    }
}

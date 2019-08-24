import * as lodash from 'lodash';
import { Observable, combineLatest } from 'rxjs';
import { map, flatMap, distinctUntilChanged, tap } from 'rxjs/operators';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { CourseService } from '../services/course.service';
import { ExerciseService } from '../services/exercise.service';

import { Course, Exercise } from '../models/models';
import { State } from '../reducers';
import * as FromPractice from '../reducers/practice.reducer';
import * as FromMedia from '../reducers/media.reducer';

import * as MediaActions from '../actions/media.actions';
import * as PracticeActions from '../actions/practice.actions';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  readonly columnsToDisplay = ['selected', 'name', 'description', 'scale'];

  ready$: Observable<boolean>;
  courses$: Observable<Course[]>;
  exercises$: Observable<Exercise[]>;
  selectedCourse$: Observable<Course>;
  selectedCourseExercise$: Observable<Exercise[]>;
  showTableOfContent$: Observable<boolean>;
  running$: Observable<boolean>;
  allExerciseSelected$: Observable<boolean>;
  onlySomeExerciseSelected$: Observable<boolean>;

  constructor(
    private store: Store<State>,
    courseService: CourseService,
    exerciseService: ExerciseService) {

    this.courses$ = courseService.entities$;
    this.exercises$ = exerciseService.entities$;
    this.running$ = store.pipe(select(FromMedia.selectRunning));
    this.showTableOfContent$ = store.pipe(select(FromPractice.selectShowTableOfContent));
    this.allExerciseSelected$ = store.pipe(select(FromPractice.selectSelectedCourseExerciseAllActive));
    this.onlySomeExerciseSelected$ = store.pipe(select(FromPractice.selectSelectedCourseExerciseSomeActive));

    this.ready$ = combineLatest(
      [courseService.loaded$, exerciseService.loaded$, this.running$])
      .pipe(
        map(([courseReady, exerciseReady, running, ]) => courseReady && exerciseReady && !running),
        distinctUntilChanged());

    const selectedCourseName$ = store.pipe(select(FromPractice.selectSelectedCourseName));
    this.selectedCourse$ = selectedCourseName$.pipe(
      flatMap(name => courseService.entities$.pipe(
        map(courses => courses.find(course => course.name === name)),
      )));
    this.selectedCourseExercise$ = this.selectedCourse$.pipe(
      flatMap(course => exerciseService.entities$.pipe(
        map(exercises =>
          course.exerciseNames
            .map(name => exercises.find(exercise => name === exercise.name))
            .filter(exercise => exercise)))));

  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.store.dispatch(MediaActions.stop());
  }
  toScaleDetails(exercise: Exercise): string {
    if (!exercise) { return; }
    const count = lodash.floor(exercise.ratio * exercise.scales.length);
    return count + '/' + exercise.scales.length;
  }
  setShowTableOfContent(show: boolean): void {
    this.store.dispatch(PracticeActions.showTableOfContent({ show: show }));
  }
  setCourse(course: Course): void {
    this.store.dispatch(PracticeActions.selectCourse({ courseName: course.name }));
  }
  exerciseSelected(exercise: Exercise): Observable<boolean> {
    return this.store.pipe(select(
      FromPractice.selectSelectedCourseExerciseActive,
      { exerciseName: exercise.name }));
  }
  toggleExercise(exercise: Exercise): void {
    this.store.dispatch(
      PracticeActions.toggleExerciseActivation({ exerciseName: exercise.name }));
  }
  toggleAllExercises(): void {
    this.store.dispatch(PracticeActions.toggleAllExerciseActivations());
  }
}

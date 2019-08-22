import * as lodash from 'lodash';
import { Observable, combineLatest } from 'rxjs';
import { map, flatMap, distinctUntilChanged, tap, filter } from 'rxjs/operators';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { CourseService } from '../services/course.service';
import { ExerciseService } from '../services/exercise.service';
import { SlideShowPlayerService } from '../services/slide-show-player.service';
import { SlideShowService } from '../services/slide-show.service';

import { Speaker } from '../models/speaker';
import { Course, Exercise } from '../models/models';
import { State,  } from '../reducers';
import * as FromPref from '../reducers/pref.reducer';
import * as FromMedia from '../reducers/media.reducer';
import * as FromPractice from '../reducers/practice.reducer';
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
  speaker$: Observable<Speaker>;
  showSubtitle$: Observable<boolean>;
  speed$: Observable<number>;
  metronome$: Observable<boolean>;

  courses$: Observable<Course[]>;
  exercises$: Observable<Exercise[]>;
  selectedCourse$: Observable<Course>;
  selectedCourseExercise$: Observable<Exercise[]>;
  showTableOfContent$: Observable<boolean>;

  constructor(
    private store: Store<State>,
    private _courseService: CourseService,
    private _exerciseService: ExerciseService,
    private _slideShow: SlideShowService,
    private _playerService: SlideShowPlayerService) {

    this.courses$ = _courseService.entities$;
    this.exercises$ = _exerciseService.entities$;
    this.ready$ = combineLatest(
      [_courseService.loaded$, _exerciseService.loaded$])
        .pipe(
          map(results => results[0] && results[1],
          distinctUntilChanged()));

    this.speaker$ = store.pipe(select(FromPref.selectSpeaker));
    this.showSubtitle$ = store.pipe(select(FromPref.selectSubtitle));
    this.speed$ = store.pipe(select(FromPref.selectSpeed));
    this.metronome$ = store.pipe(select(FromPref.selectMetronome));

    const selectedCourseName$ = store.pipe(select(FromPractice.selectSelectedCourseName));
    this.selectedCourse$ = selectedCourseName$.pipe(
        flatMap(name => _courseService.entities$.pipe(
          map(courses => courses.find(course => course.name === name)),
          tap(course => console.log(course))
        )));

    this.selectedCourseExercise$ = this.selectedCourse$.pipe(
      flatMap(course => _exerciseService.entities$.pipe(
        map(exercises =>
          course.exerciseNames
            .map(name => exercises.find(exercise => name === exercise.name))
            .filter(exercise => exercise)))));

    this.showTableOfContent$ = store.pipe(select(FromPractice.selectShowTableOfContent));

    // Player
  }
  // get courseSelected(): Course {
  //   return this._course;
  // }
  // set courseSelected(value: Course) {
  //   this._course = value;
  //   this._model.selectedCourseName = value.name;
  //   this.compilePlayer();
  // }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    // this.player.stop();
    this.store.dispatch(MediaActions.stop());
  }

  compilePlayer() {
    // this.player = this._playerService.create(this._slideShow.toSlideShow(this._model));
  }

  toScaleDetails(exercise: Exercise): string {
    if (!exercise) { return; }
    const count = lodash.floor(exercise.ratio * exercise.scales.length);
    return count + '/' + exercise.scales.length;
  }
  toggleExercise(exercise: Exercise): void {
    // exercise.active = !exercise.active;
    // this.compilePlayer();
  }
  allExerciseSelected(): boolean {
    // if (!this.courseSelected) return false;
    // return this.courseSelected.exercises.every(exercise => exercise.active);
    return false;
  }
  onlySomeExerciseSelected(): boolean {
    // if (!this.courseSelected) return false;
    // if (this.allExerciseSelected()) return false;
    // return this.courseSelected.exercises.some(exercise => exercise.active);
    return false;
  }
  someExerciseSelected(): boolean {
    // if (!this.courseSelected) return false;
    // return this.courseSelected.exercises.some(exercise => exercise.active);
    return false;
  }
  setShowTableOfContent(show: boolean): void {
    this.store.dispatch(PracticeActions.showTableOfContent({show: show}));
  }
  setCourse(course: Course): void {
    this.store.dispatch(PracticeActions.selectCourse({course: course}));
  }
  allToggle(): void {
    // if(!this.courseSelected) return;
    // const target = !this.allExerciseSelected();
    // for(const exercise of this.courseSelected.exercises) {
    //   exercise.active = target;
    // }
    this.compilePlayer();
  }
}

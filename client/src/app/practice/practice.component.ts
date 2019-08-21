import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course, Exercise } from 'src/app/models/models';
import { SlideShowPlayerService, StateType, SlideShowPlayer } from '../services/slide-show-player.service';
import { SlideShowService } from '../services/slide-show.service';
import * as lodash from 'lodash';
// tslint:disable-next-line: max-line-length
import { State, selectPref, selectPrefSpeaker, selectPrefSubtitle, selectPrefSpeed, selectPrefMetronome, selectPracticeSelectedCourseName, selectPracticeShowTableOfContent } from '../reducers';
import { Store, select } from '@ngrx/store';
import * as FromPref from '../reducers/pref.reducer';
import { Observable, combineLatest } from 'rxjs';
import { Speaker } from 'src/app/models/speaker';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data';
import { CourseService } from '../services/course.service';
import { ExerciseService } from '../services/exercise.service';
import { combineAll, map } from 'rxjs/operators';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  private loaded$: Observable<boolean>;
  private speaker$: Observable<Speaker>;
  private showSubtitle$: Observable<boolean>;
  private speed$: Observable<number>;
  private metronome$: Observable<boolean>;

  columnsToDisplay = ['selected', 'name', 'description', 'scale'];
  player: SlideShowPlayer;

  private courses$: Observable<Course[]>;
  private exercises$: Observable<Exercise[]>;
  private selectedCourseName$: Observable<string>;
  private showTableOfContent$: Observable<boolean>;
  // private exerciseSets: Observable<

  public get playButtonText() {
    if (this.player.state === StateType.paused) { return 'Resume'; }
    return 'Start';
  }
  public get canSelectOption(): boolean {
    return this.player.state === StateType.stopped;
  }
  constructor(
    private _store: Store<State>,
    private _courseService: CourseService,
    private _exerciseService: ExerciseService,
    private _slideShow: SlideShowService,
    private _playerService: SlideShowPlayerService) {

    this.courses$ = _courseService.entities$;
    this.exercises$ = _exerciseService.entities$;
    this.loaded$ = combineLatest(
      [_courseService.loaded$, _exerciseService.loaded$])
        .pipe(map(results => results[0] && results[1]));

    this.speaker$ = _store.pipe(select(selectPrefSpeaker));
    this.showSubtitle$ = _store.pipe(select(selectPrefSubtitle));
    this.speed$ = _store.pipe(select(selectPrefSpeed));
    this.metronome$ = _store.pipe(select(selectPrefMetronome));

    this.selectedCourseName$ = _store.pipe(select(selectPracticeSelectedCourseName));
    this.showTableOfContent$ = _store.pipe(select(selectPracticeShowTableOfContent));
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
    this.player.stop();
  }

  compilePlayer() {
    // this.player = this._playerService.create(this._slideShow.toSlideShow(this._model));
  }

  toScaleDetails(exercise: Exercise): string {
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
  allToggle(): void {
    // if(!this.courseSelected) return;
    // const target = !this.allExerciseSelected();
    // for(const exercise of this.courseSelected.exercises) {
    //   exercise.active = target;
    // }
    this.compilePlayer();
  }
}

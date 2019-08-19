import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course, Exercise } from 'src/api/models';
import { SlideShowPlayerService, StateType, SlideShowPlayer } from '../services/slide-show-player.service';
import { SlideShowService } from '../services/slide-show.service';
import * as lodash from 'lodash';
import { Settings } from 'src/api/settings';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  private _model: Settings;
  private _course: Course;

  columnsToDisplay = ['selected', 'name', 'description', 'scale'];
  player: SlideShowPlayer;

  get courses(): Course[] { return this._model.courses; }
  get contentExpanded(): boolean { return this._model.showContent; }
  set contentExpanded(value: boolean) { this._model.showContent = value; }

  public get playButtonText() {
    if (this.player.state === StateType.paused) { return 'Resume'; }
    return 'Start';
  }
  public get canSelectOption(): boolean {
    return this.player.state === StateType.stopped; 
  }
  constructor(
    private _settingsService: SettingsService,
    private _slideShow: SlideShowService,
    private _playerService: SlideShowPlayerService) {

      const settings = this._settingsService.loadSettings();
    this._model = settings;
    this.courseSelected = settings.courses.find(course => course.name === settings.selectedCourseName);
  }
  get courseSelected(): Course {
    return this._course;
  }
  set courseSelected(value: Course) {
    this._course = value;
    this._model.selectedCourseName = value.name;
    this.compilePlayer();
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.player.stop();
    this._settingsService.saveSettings(this._model);
  }

  compilePlayer() {
    this.player = this._playerService.create(this._slideShow.toSlideShow(this._model));
  }

  toScaleDetails(exercise: Exercise): string {
    const count = lodash.floor(exercise.ratio * exercise.scales.length);
    return count + '/' + exercise.scales.length;
  }
  toggleExercise(exercise: Exercise): void {
    exercise.active = !exercise.active;
    this.compilePlayer();
  }
  allExerciseSelected(): boolean {
    if (!this.courseSelected) return false;
    return this.courseSelected.exercises.every(exercise => exercise.active);
  }
  onlySomeExerciseSelected(): boolean {
    if (!this.courseSelected) return false;
    if (this.allExerciseSelected()) return false;
    return this.courseSelected.exercises.some(exercise => exercise.active);
  }
  someExerciseSelected(): boolean {
    if (!this.courseSelected) return false;
    return this.courseSelected.exercises.some(exercise => exercise.active);
  }
  allToggle(): void {
    if(!this.courseSelected) return;
    const target = !this.allExerciseSelected();
    for(const exercise of this.courseSelected.exercises) {
      exercise.active = target;
    }
    this.compilePlayer();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course, Exercise } from 'src/api/models';
import { MatTableDataSource } from '@angular/material';
import { SettingsService, Settings } from '../services/settings.service';
import { SlideShowPlayerService, StateType, SlideShowPlayer } from '../services/slide-show-player.service';
import { SlideShowService } from '../services/slide-show.service';
import {SelectionModel} from '@angular/cdk/collections';
import * as lodash from 'lodash';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  private _settings: Settings;
  private _course: Course;

  columnsToDisplay = ['selected', 'name', 'description', 'scale']; 
  player: SlideShowPlayer;
  get courses() { return this._settings.courses; }

  public get playButtonText() {
    if (this.player.state === StateType.paused) { return 'Resume'; }
    return 'Start';
  }
  public get canSelectOption(): boolean { return this.player.state === StateType.stopped; }

  constructor(
    private _settingsService: SettingsService,
    private _slideShow: SlideShowService,
    private _playerService: SlideShowPlayerService) {

      const settings = this._settingsService.loadSettings();
    this._settings = settings;
    this.courseSelected = settings.courses.find(course => course.name === settings.selectedCourseName);
  }
  get courseSelected(): Course {
    return this._course;
  }
  set courseSelected(value: Course) {
    this._course = value;
    this._settings.selectedCourseName = value.name;
    this.player = this._playerService.create(this._slideShow.toSlideShow(this._settings));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.player.stop();
    this._settingsService.saveSettings(this._settings);
  }

  toScaleDetails(exercise: Exercise): string {
    const count = lodash.floor(exercise.ratio * exercise.scales.length);
    return count + '/' + exercise.scales.length;
  }
  toggleExercise(exercise: Exercise): void {
    exercise.active = !exercise.active;
  }
  allExerciseSelected(): boolean {
    if (!this.courseSelected) return false;
    return this.courseSelected.exercises.every(exercise => exercise.active);
  }
  someExerciseSelected(): boolean {
    if (!this.courseSelected) return false;
    if (this.allExerciseSelected()) return false;
    return this.courseSelected.exercises.some(exercise => exercise.active);
  }
  allToggle(): void {
    if(!this.courseSelected) return;
    const target = !this.allExerciseSelected();
    for(const exercise of this.courseSelected.exercises) {
      exercise.active = target;
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { courses, Course, Exercise } from '../course-definition';
import { SlideShowPlayerService, StateType, SlideShowPlayer } from '../services/slide-show-player.service';
import { Settings, SettingsService } from '../services/settings.service';
import * as lodash from 'lodash';
import { SlideShowService } from '../services/slide-show.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  private _course: Course;
  columnsToDisplay = ['name', 'description', 'scale'];
  player: SlideShowPlayer;

  public get playButtonText() {
    if (this.player.state === StateType.paused) { return 'Resume'; }
    return 'Start';
  }
  public get canSelectOption(): boolean { return this.player.state === StateType.stopped; }
  public readonly courses: Course[] = courses;

  constructor(
    private _settingsService: SettingsService,
    private _slideShow: SlideShowService,
    private _playerService: SlideShowPlayerService) {

    this.courseSelected = this._settingsService.course;
  }
  public get courseSelected(): Course {
    return this._course;
  }
  public set courseSelected(value: Course) {
    this._course = value;
    this.player = this._playerService.create(this._slideShow.toSlideShow(value));
  }
  public showSubtitle: boolean;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.player.stop();
    this._settingsService.course = this.courseSelected;
    this._settingsService.saveSettings();
  }
  toScaleDetails(exercise: Exercise): string {
    const count = lodash.floor(exercise.ratio * exercise.scales.length);
    return count + '/' + exercise.scales.length;
  }
}

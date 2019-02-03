import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { courses, Course, Exercise } from '../course-definition';
import { Subscription } from 'rxjs';
import { VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import { CoursePlayingService, Playback } from '../services/course-playing.service';
import { speakers } from 'src/api';
import { Settings, SettingsService } from '../services/settings.service';
import * as lodash from 'lodash';
import { MediaControl } from '../services/wave-player.service';

export enum StateType {
  stopped,
  playing,
  paused
}
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  columnsToDisplay = ['name', 'description', 'scale'];
  public courseControl: FormControl = new FormControl(null, [Validators.required]);

  public get playButtonText() {
    if (this.state === StateType.paused) { return 'Resume'; }
    return 'Start';
  }
  public get canSelectOption(): boolean { return this.state === StateType.stopped; }
  public get canPlay(): boolean { return this.courseSelected && (this.state === StateType.paused || this.state === StateType.stopped); }
  public get canPause(): boolean { return this.state === StateType.playing; }
  public get canStop(): boolean { return this.state === StateType.playing; }

  public readonly courses: Course[] = courses;
  private _settings: Settings;

  constructor(
    private _coursePlayer: CoursePlayingService,
    private _settingsService: SettingsService) {

    this.state = StateType.stopped;
    this._settings = this._settingsService.settings;
    this.courseSelected = this._settingsService.course;
  }
  private _operation: Subscription;
  private _control: MediaControl;
  private _voice: VoiceSelectionParams;

  public courseSelected: Course;

  public state: StateType;
  public showSubtitle: boolean;
  public subtitle: string;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    this.stop();
    this._settingsService.course = this.courseSelected;
    this._settingsService.saveSettings();
  }
  public palyOrResume(): void {
    if (this.state === StateType.paused) {
      this._control.resume();
      this.state = StateType.playing;
    } else {
      this.play();
    }
  }
  public play(): void {
    this.stop();
    this.state = StateType.playing;

    const platBack: Playback = {
      onstate: () =>{},
      ontext: () => {},
    };
    this._operation = this._coursePlayer.play(platBack, this.courseSelected)
      .subscribe(control => {
        this._control = control;
      },
        error => {
          console.log(error);
          this.stop();
        },
        () => {
          this.stop();
        });
  }
  public pause(): void {
    if (this._control) {
      this._control.pause();
    }
    this.state = StateType.paused;
  }
  public stop(): void {
    if (this._operation) {
      this._operation.unsubscribe();
      this._operation = undefined;
      this._control = undefined;
    }
    this.state = StateType.stopped;
  }
  toScaleDetails(exercise: Exercise): string {
    const count = lodash.floor(exercise.ratio * exercise.scales.length);
    return count + '/' + exercise.scales.length;
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { courses, Course, Speaker, speakers } from './course-definition';
import { MediaControl } from '../services/google/text-to-speech.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { VoiceSelectionParams } from 'src/api/text-to-speech/contract';
import { CoursePlayingService } from '../services/course-playing.service';

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
  public readonly speakers: Speaker[] = speakers;

  constructor(
    private _coursePlayer: CoursePlayingService) {
    this.showSubtitle = true;
    this.state = StateType.stopped;
  }
  private _operation: Subscription;
  private _control: MediaControl;
  private _voice: VoiceSelectionParams;

  public courseSelected: Course;
  public speakerSelected: Speaker = speakers[0];

  public state: StateType;
  public showSubtitle: boolean;
  public subtitle: string;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
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
    this._voice = this.speakerSelected.voice;
    if (this._voice === undefined) {
      this._voice = speakers[Math.floor(Math.random() * 4.0)].voice;
    }
    this.state = StateType.playing;
    this._operation = this._coursePlayer.play({
      course: this.courseSelected,
      voice: this._voice,
      onSubtitle: (subtitle) => this.subtitle = subtitle
    })
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
}

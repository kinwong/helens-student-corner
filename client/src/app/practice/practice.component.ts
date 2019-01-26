import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { courses, Exercise, Course, Speaker, speakers } from './course-definition';
import { TextToSpeechService, MediaControl } from '../services/google/text-to-speech.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription, Observable, concat } from 'rxjs';
import { tap, concatAll, concatMap } from 'rxjs/operators';
import lodash from 'lodash';
import { VoiceSelectionParams } from 'src/api/text-to-speech/contract';

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
    private _cookies: CookieService,
    private _speech: TextToSpeechService) {

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

  private static shuffle(texts: string[], count: number): string[] {
    return texts;
  }
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
      this._operation = this.playCourse(this.courseSelected)
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
  private playCourse(course: Course): Observable<MediaControl> {
    const greetings = course.greetings.map(greeting => this.read(greeting));
    const scales = lodash.flatMap(course.exercises, exercise => {
      const count = exercise.scales.length = 4;
      const texts = PracticeComponent.shuffle(exercise.scales, count);
      return texts.map(text => this.read(text));
    });
    const valedictions = course.valedictions
      .map(valediction => this.read(valediction));

    const all = greetings.concat(scales, valedictions);
    // return concat<MediaControl, MediaControl>(all);
    return concat(all[0], all[1]);
  }
  private read(text: string): Observable<MediaControl> {
    return this._speech.speak(this._voice, text)
      .pipe(tap(x => this.subtitle = text));
  }
}

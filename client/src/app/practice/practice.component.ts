import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { courses, Exercise, Course } from './course-definition';
import { TextToSpeechService, MediaControl } from '../services/google/text-to-speech.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription, Observable, from, concat } from 'rxjs';
import { tap } from 'rxjs/operators';
import _ from 'lodash';

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

  public get playButtonText() {
    if (this.state === StateType.paused) { return 'Resume'; }
    return 'Start';
  }
  public get canSelectOption(): boolean { return this.state === StateType.stopped; }
  public get canPlay(): boolean { return this.courseSelected && (this.state === StateType.paused || this.state === StateType.stopped); }
  public get canPause(): boolean { return this.state === StateType.playing; }
  public get canStop(): boolean { return this.state === StateType.playing; }

  constructor(
    private _cookies: CookieService,
    private _speech: TextToSpeechService) {

    this.showSubtitle = false;
    this.courses = courses;
    this.state = StateType.stopped;
  }
  private _operation: Subscription;
  private _control: MediaControl;

  @Input()
  public running: boolean;
  // public
  public textToRead: string;
  public courses: Course[];
  public courseSelected: Course;
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

    const greeting = this.read(course.greeting);
    const scales = _.flatMap(course.exercises, exercise => {
      const count = exercise.scales.length = 4;
      const texts = PracticeComponent.shuffle(exercise.scales, count);
      return texts.map(text => this.read(text));
    });

    const fragments = concat(greeting, scales[0]);

    return fragments;
  }

  private read(text: string): Observable<MediaControl> {
    return this._speech.speak(text)
      .pipe(tap(x => this.subtitle = text));
  }
}

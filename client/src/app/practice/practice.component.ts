import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { courses, Exercise, Course } from './course-definition';
import { TextToSpeechService } from '../services/google/text-to-speech.service';

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

  @Input()
  public running: boolean;
  // public
  public textToRead: string;
  public courses: Course[];
  public courseSelected: Course;
  public state: StateType;

  public get playButtonText() {
    if (this.state === StateType.paused) {
      return 'Resume';
    } else {
      return 'Start';
    }
  }
  public get canSelectCourse(): boolean { return this.state === StateType.stopped; }
  public get canPlay(): boolean { return this.courseSelected && (this.state === StateType.paused || this.state === StateType.stopped); }
  public get canPause(): boolean { return this.state === StateType.playing; }
  public get canStop(): boolean { return this.state === StateType.playing; }

  constructor(private _speech: TextToSpeechService) {
    this.courses = courses;
    this.state = StateType.stopped;
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

  public play(): void {
    this.state = StateType.playing;
    const toSpeak =
    'Good afternoon, please be seated, and get your stool adjusted, we can start when you\'re ready.' +
    'C major left hand. ' +
    'C major right hand. ' +
    'C major both hand. ';

    this._speech.speak(toSpeak
      ).subscribe(_ => {
      console.log('Done!');
    });
  }
  public pause(): void {
    this.state = StateType.paused;
  }
  public stop(): void {
    this.state = StateType.stopped;
  }
}

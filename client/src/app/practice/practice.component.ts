import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { courses, Exercise, Course } from './course-definition';
import { SpeechService } from '../services/speech.service';

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

  constructor(public speech: SpeechService) {
    this.courses = courses;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }


}

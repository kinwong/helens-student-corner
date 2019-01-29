import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Course } from '../course-definition';
import { CoursePlayingService } from '../services/course-playing.service';
import { SettingsService } from '../services/settings.service';
import { Subscription } from 'rxjs';
import { MediaControl } from '../services/google/text-to-speech.service';
import { StateType } from '../practice/practice.component';

@Component({
  selector: 'app-course-player',
  templateUrl: './course-player.component.html',
  styleUrls: ['./course-player.component.scss']
})
export class CoursePlayerComponent implements OnInit, OnDestroy {
  @Input() course: Course;
  constructor(
    private _coursePlayer: CoursePlayingService,
    private _settingsService: SettingsService) {
    }

  public state: StateType;

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
}

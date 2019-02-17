import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Course } from '../course-definition';
import { SlidePlayerService } from '../services/slide-player.service';
import { SettingsService } from '../services/settings.service';
import { Subscription } from 'rxjs';
import { StateType } from '../practice/practice.component';

@Component({
  selector: 'app-course-player',
  templateUrl: './course-player.component.html',
  styleUrls: ['./course-player.component.scss']
})
export class CoursePlayerComponent implements OnInit, OnDestroy {
  @Input() course: Course;
  
  constructor(
    private _settingsService: SettingsService,
    private _coursePlayer: SlidePlayerService) {
      
    }

  public state: StateType;

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { SlideShow } from '../services/slide-show.service';
import { SlideShowPlayerService } from '../services/slide-show-player.service';
import { Course } from '../course-definition';

@Component({
  selector: 'app-slide-show-player',
  templateUrl: './slide-show-player.component.html',
  styleUrls: ['./slide-show-player.component.scss']
})
export class SlideShowPlayerComponent implements OnInit {
  course: Course;
  slideShow: SlideShow;
  
  constructor(
    public player: SlideShowPlayerService
  ) { }

  ngOnInit() {
  }
}

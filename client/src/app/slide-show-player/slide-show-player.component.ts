import { Component, OnInit } from '@angular/core';
import { SlideShow } from '../services/slide-show.service';
import { SlideShowPlayerService } from '../services/slide-show-player.service';
import { Course } from '../course-definition';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-slide-show-player',
  templateUrl: './slide-show-player.component.html',
  styleUrls: ['./slide-show-player.component.scss']
})
export class SlideShowPlayerComponent implements OnInit {
  get heading(): string {
    const text = this.player.slideShow.title;
    return (text)? text: "";
  }
  get subtitle(): string {
    const subtitle = this.player.text;
    return (subtitle)? subtitle : "";
  }
  get progress(): number {
    return this.player.progress;
  }

  constructor(
    public player: SlideShowPlayerService
  ) { }

  ngOnInit() {
  }
}

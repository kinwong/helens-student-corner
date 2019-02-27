import { Component, OnInit, Input } from '@angular/core';
import { SlideShow } from '../services/slide-show.service';
import { SlideShowPlayerService, SlideShowPlayer } from '../services/slide-show-player.service';
import { Course } from '../course-definition';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-slide-show-player',
  templateUrl: './slide-show-player.component.html',
  styleUrls: ['./slide-show-player.component.scss']
})
export class SlideShowPlayerComponent implements OnInit {
  @Input()
  player: SlideShowPlayer;

  get heading(): string {
    const text = this.player.slideShow.title;
    return (text)? text: "";
  }
  get subtitle(): string {
    const subtitle = this.player.text;
    return (subtitle)? subtitle : "";
  }
  get showProgress(): boolean {
    if(!this.player) return false;
    if(!this.player.total || !this.player.current) return false;
    return true;
  }
  get progress(): number {
    if(!this.player) return 0.0;
    if(!this.player.total)  return 0.0;
    return this.player.current / this.player.total * 100.0;
  }
  constructor() { }
  ngOnInit() {

  }
}

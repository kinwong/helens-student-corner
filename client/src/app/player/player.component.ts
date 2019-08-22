import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from '../reducers';
import * as FromMedia from '../reducers/media.reducer';
import * as MediaActions from '../actions/media.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playing$: Observable<boolean>;
  canPaused$: Observable<boolean>;
  running$: Observable<boolean>;
  playButtonText$: Observable<string>;

  constructor(private store: Store<State>) {
    this.playing$ = store.pipe(select(FromMedia.selectPlaying));
    this.running$ = store.pipe(select(FromMedia.selectRunning));
    this.playButtonText$ = store.pipe(
      select(FromMedia.selectPaused),
      map(paused => paused ? 'Resume' : 'Play'));
  }

  ngOnInit() {
  }
  play(): void {
    this.store.dispatch(MediaActions.play());
  }
  pause(): void {
    this.store.dispatch(MediaActions.pause());
  }

  stop(): void {
    this.store.dispatch(MediaActions.stop());
  }
}

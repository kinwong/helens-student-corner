import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from '../reducers';
import * as FromMedia from '../reducers/media.reducer';
import * as MediaActions from '../actions/media.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playing$: Observable<boolean>;
  canPaused$: Observable<boolean>;
  canPlay$: Observable<boolean>;
  playButtonText$: Observable<string>;

  constructor(private store: Store<State>) {
    this.playing$ = store.pipe(select(FromMedia.selectPlaying));
    this.canPlay$ = store.pipe(select(FromMedia.selectCanPlay));
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

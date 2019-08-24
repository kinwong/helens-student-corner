import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from '../reducers';
import * as FromMedia from '../reducers/media.reducer';
import * as MediaActions from '../actions/media.actions';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playing$: Observable<boolean>;
  running$: Observable<boolean>;
  playButtonText$: Observable<string>;
  paused$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private store: Store<State>) {
    this.playing$ = store.pipe(select(FromMedia.selectPlaying));
    this.running$ = store.pipe(select(FromMedia.selectRunning));
    this.playButtonText$ = store.pipe(
      select(FromMedia.selectPaused),
      tap(paused => this.paused$.next(paused)),
      map(paused => paused ? 'Resume' : 'Play'));
  }

  ngOnInit() {
  }
  play(): void {
    this.store.dispatch(
      this.paused$.value ? MediaActions.resume() : MediaActions.play());
  }
  pause(): void {
    this.store.dispatch(MediaActions.pause());
  }

  stop(): void {
    this.store.dispatch(MediaActions.stop());
  }
}

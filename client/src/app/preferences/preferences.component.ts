import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Speaker, speakers } from 'src/app/models/speaker';
import * as FromPref from '../reducers/pref.reducer';
import * as PrefActions from '../actions/pref.actions';
import { State } from '../reducers';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  speaker$: Observable<Speaker>;
  showSubtitle$: Observable<boolean>;
  speed$: Observable<number>;
  metronome$: Observable<boolean>;

  readonly speakers: Speaker[] = speakers;

  constructor(private store: Store<State>) {
    this.speaker$ = store.pipe(select(FromPref.selectSpeaker));
    this.showSubtitle$ = store.pipe(select(FromPref.selectSubtitle));
    this.speed$ = store.pipe(select(FromPref.selectSpeed));
    this.metronome$ = store.pipe(select(FromPref.selectMetronome));
  }
  ngOnInit() {
  }
  onSpeakerChange(speaker: Speaker): void {
    this.store.dispatch(PrefActions.setSpeaker({speaker: speaker}));
  }
  onSubtitleChange(subtitle: boolean): void {
    this.store.dispatch(PrefActions.showSubtitle({subtitle: subtitle}));
  }
  onSpeedChange(speed: number): void {
    this.store.dispatch(PrefActions.setSpeed({speed: speed}));
  }
}

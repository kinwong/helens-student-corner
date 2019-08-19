import { Component, OnInit } from '@angular/core';
import { State, selectPrefSpeaker, selectPrefSubtitle, selectPrefSpeed, selectPrefMetronome } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Speaker, speakers } from 'src/api/speaker';
import { Observable } from 'rxjs';
import * as fromPref from '../reducers/pref.actions';

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
    this.speaker$ = store.pipe(select(selectPrefSpeaker));
    this.showSubtitle$ = store.pipe(select(selectPrefSubtitle));
    this.speed$ = store.pipe(select(selectPrefSpeed));
    this.metronome$ = store.pipe(select(selectPrefMetronome));
  }
  ngOnInit() {
  }
  onSpeakerChange(speaker: Speaker): void {
    this.store.dispatch(fromPref.setSpeaker({speaker: speaker}));
  }
  onSubtitleChange(subtitle: boolean): void {
    this.store.dispatch(fromPref.showSubtitle({subtitle: subtitle}));
  }
  onSpeedChange(speed: number): void {
    this.store.dispatch(fromPref.setSpeed({speed: speed}));
  }
}

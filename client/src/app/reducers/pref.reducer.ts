import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Speaker, speakers } from 'src/app/models/speaker';
import * as PrefActions from '../actions/pref.actions';

export interface State {
  speaker: Speaker;
  showSubtitle: boolean;
  speed: number;
  metronome: boolean;
}

const initialState: State = {
  speaker: speakers[0],
  showSubtitle: true,
  speed: 1.0,
  metronome: false
};

const prefReducer = createReducer(
  initialState,
  on(
    PrefActions.setSpeaker,
    (state, {speaker}) => ({
    ...state, speaker: speaker
  })),
  on(
    PrefActions.showSubtitle,
    (state, {subtitle}) => ({
    ...state, showSubtitle: subtitle
  })),
  on(
    PrefActions.setSpeed,
    (state, {speed}) => ({
    ...state, speed: speed
  })),
  on(
    PrefActions.setMetronome,
    (state, {metronome}) => ({
    ...state, metronome: metronome
  })),
  on(
    PrefActions.reset,
    _ => (initialState))
);
export function reducer(state: State | undefined, action: Action) {
  return prefReducer(state, action);
}

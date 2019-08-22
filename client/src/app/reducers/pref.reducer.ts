import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import * as PrefActions from '../actions/pref.actions';
import { Speaker, speakers } from '../models/speaker';

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
export const featureName = 'pref';
const selectFeature = createFeatureSelector<State>(featureName);
export const selectSpeaker = createSelector(selectFeature, state => state.speaker);
export const selectSubtitle = createSelector(selectFeature, state => state.showSubtitle);
export const selectSpeed = createSelector(selectFeature, state => state.speed);
export const selectMetronome = createSelector(selectFeature, state => state.metronome);


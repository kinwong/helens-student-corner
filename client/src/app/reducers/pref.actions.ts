import { createAction, props } from '@ngrx/store';
import { Speaker } from 'src/api/speaker';

export const setSpeaker = createAction(
  '[Pref] Set Speaker',
  props<{speaker: Speaker }>());
export const setSubtitle = createAction(
  '[Pref] Set Subtitle',
  props<{subtitle: boolean}>());
export const setSpeed = createAction(
  '[Pref] Set Speed',
  props<{speed: number}>());
export const setMetronome = createAction(
  '[Pref] Set Metronome',
  props<{metronome: boolean}>());
export const reset = createAction(
  '[Pref] Reset');


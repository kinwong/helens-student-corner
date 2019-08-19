import { createAction, props } from '@ngrx/store';

export const play = createAction('[Media] Play');
export const pause = createAction('[Media] Pause');
export const stop  = createAction('[Media] Stop');

export const setSubtitle = createAction(
  '[Media] Set Subtitle',
  props<{subtitle: string | undefined}>());

export const setTotalChapter =  createAction(
  '[Media] Set Total Chapter',
  props<{totalChapter: number}>());

export const setCurrentChapter = createAction(
  '[Media] Set Current Chapter',
  props<{currentChapter: number}>());

export const setTotalTime = createAction(
  '[Media] Set Total Time',
  props<{ totalTime: number}>());

export const setCurrentTime = createAction(
  '[Media] Set Current Time',
  props<{ currentTime: number}>());



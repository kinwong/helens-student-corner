import { createAction, props } from '@ngrx/store';

export const play = createAction('[Media] Play');
export const resume = createAction('[Media] Resume');
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

  export const reportMessage = createAction('[Media] Report Message', props<{ message: string }>());
  export const reportError = createAction('[Media] Report Error', props<{ error: any}>());
  export const clearError = createAction( '[Media] Clear Error');

  export const startLoading = createAction('[Media] Start Loading');
  export const stopLoading = createAction('[Media] Stop Loading');

  export const setProgress = createAction(
    '[Media] Set Chapter Progress',
    props<{totalTime: number, currentTime: number}>());

import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as MediaActions from '../actions/media.actions';

export interface State {
  /**
   *  Indicates if there is any audio playing.
   */
  playing: boolean;
  paused: boolean;
  /**
   * Indicates if there is
   */
  error: string | undefined;
  /**
   * Sets the subtitle of the media.
   */
  subtitle: string | undefined;
  totalChapter: number | undefined;
  currentChapter: number | undefined;
  totalTime: number | undefined;
  currentTime: number | undefined;
}

const initialState: State = {
  playing: false,
  paused: false,

  error: undefined,
  subtitle: undefined,
  totalChapter: undefined,
  currentChapter: undefined,
  totalTime: undefined,
  currentTime: undefined
};

const mediaReducer = createReducer(
  initialState,
  on(MediaActions.play,
    state => {
      if (state.paused) {
        // Resumes media.
        return {
          ...state,
          playing: true,
          paused: false,
        };
      } else {
        return {
          ...state,
          playing: true,
          paused: false,
        };
      }
    }),

  on(MediaActions.pause,
    state => {
      if (!state.paused) {
        // Pauses playing media.
        return {
          ...state,
          paused: true,
          playing: false,
        };
      }
      return state;
    }),

  on(MediaActions.stop,
    state => {
      return {
        ...initialState
      };
    }),

  on(MediaActions.setSubtitle,
    (state, { subtitle }) => ({
      ...state,
      subtitle: subtitle
    })),

  on(MediaActions.setTotalChapter,
    (state, { totalChapter }) => ({
      ...state,
      totalChapter: totalChapter
    })),

  on(MediaActions.setCurrentChapter,
    (state, { currentChapter }) => ({
      ...state,
      currentChapter: currentChapter
    })),

  on(MediaActions.setTotalTime,
    (state, { totalTime }) => ({
      ...state,
      totalTime: totalTime
    })),

  on(MediaActions.setCurrentTime,
    (state, { currentTime }) => ({
      ...state,
      currentTime: currentTime
    })),
);

export function reducer(state: State | undefined, action: Action) {
  return mediaReducer(state, action);
}

export const featureName = 'media';
const selectFeature = createFeatureSelector<State>(featureName);

export const selectPlaying = createSelector(selectFeature, state => state.playing);
export const selectPaused = createSelector(selectFeature, state => state.paused);
export const selectError = createSelector(selectFeature, state => state.error);
export const selectRunning = createSelector(selectFeature, state => state.playing || state.paused);

export const selectSubtitle = createSelector(selectFeature, state => state.subtitle);
export const selectTotalChapter = createSelector(selectFeature, state => state.totalChapter);
export const selectCurrentChapter = createSelector(selectFeature, state => state.currentChapter);

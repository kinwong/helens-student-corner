import { createReducer, on, Action } from '@ngrx/store';
import * as MediaActions from './media.actions';

export interface State {
  /**
   *  Indicates if there is any audio playing.
   */
  playing: boolean;
  paused: boolean;
  /**
   * Indicate if media can be plaued.
   */
  canPlay: boolean;
  /**
   * Indicate if the media can be paused.
   */
  canPause: boolean;
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
  canPlay: true,
  canPause: false,

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
          paused: false
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
        paused: true
      };
    }
    return state;
  }),

  on(MediaActions.stop,
    state => {

    if (state.playing) {
      return {
        ...state,
        playing: false,
        paused: false
      }
    }
    return state;
  }),

  on(MediaActions.setSubtitle,
    (state, {subtitle}) => ({
      ...state,
      subtitle: subtitle
    })),

  on(MediaActions.setTotalChapter,
    (state, {totalChapter}) => ({
      ...state,
      totalChapter: totalChapter
    })),

  on(MediaActions.setCurrentChapter,
    (state, {currentChapter}) => ({
      ...state,
      currentChapter: currentChapter
    })),

    on(MediaActions.setTotalTime,
      (state, {totalTime}) => ({
        ...state,
        totalTime: totalTime
      })),

      on(MediaActions.setCurrentTime,
        (state, {currentTime}) => ({
          ...state,
          currentTime: currentTime
        })),
  );

export function reducer(state: State | undefined, action: Action) {
  return mediaReducer(state, action);
}

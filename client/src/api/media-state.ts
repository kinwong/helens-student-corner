// src/app/interfaces/stream-state.ts
export interface MediaState {
  /**
   *  Indicates if there is any audio playing.
   */
  playing: boolean;

  readableSubtitle: string;
  /**
   *  Returns a string which gives you the current time of playing audio in a human-readable form.
   */
  readableCurrentTime: string;
  /**
   * Returns a the human-readable duration of the current audio.
   */
  readableDuration: string;
  /**
   *  The duration of current audio in milliseconds.
   */
  duration: number | undefined;
  /**
   * The current time of audio in milliseconds.
   */
  currentTime: number | undefined;
  /**
   * Indicate if you can play the selected audio or not.
   */
  canPlay: boolean;
  /**
   * a boolean to indicate if an error occurred while playing audio or not.
   */
  error: boolean;
}

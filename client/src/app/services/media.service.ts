import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, defer, interval } from 'rxjs';
import { takeUntil, withLatestFrom, filter, take, map, share, reduce } from 'rxjs/operators';
import * as moment from 'moment';
import { MediaState } from 'src/api/media-state';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private _stop$ = new Subject<MediaState>();
  public play(): void {
    // this.audioObj.play();
  }
  public pause(): void {
    // this.audioObj.pause();
  }
  public stop(): void {
    this._stop$.next();
  }

  constructor() { }

  /**
   * Creates a waiter that can be paused.
   * @param duration The duration in milliseconds.
   * @param pause$ Observable for pausing.
   * @returns stepTimer and completeTimer.
   */
  public createWaiter(
    duration: number, pause$: Observable<boolean>): { stepTimer: Observable<any>, completeTimer: Observable<any> } {
    const pausableTimer$ = defer(() => {
      let milliseconds = 1;
      return interval(1).pipe(
        withLatestFrom(pause$),
        filter(([_, paused]) => !paused),
        take(duration),
        map(() => milliseconds++)
      );
    }).pipe(share());

    return { stepTimer: pausableTimer$, completeTimer: pausableTimer$.pipe(reduce((x, y) => y)) };
  }
}

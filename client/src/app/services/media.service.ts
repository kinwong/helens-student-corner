import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, defer, interval } from "rxjs";
import { takeUntil, withLatestFrom, filter, take, map, share, reduce } from "rxjs/operators";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private _stop$ = new Subject();
  public play(): void {
    //this.audioObj.play();
  }
  public pause(): void {
    //this.audioObj.pause();
  }
  
  public stop(): void {
    this._stop$.next();
  }

  constructor() { }


  createPausableTimer(
    timeout: number, pause: BehaviorSubject<boolean>): { stepTimer: Observable<any>, completeTimer: Observable<any> } {
    const pausableTimer$ = defer(() => {
      var milliseconds = 1;

      return interval(1).pipe(
        withLatestFrom(pause),
        filter(([v, paused]) => !paused),
        take(timeout),
        map(() => milliseconds++)
      )
    }).pipe(share());

    return { stepTimer: pausableTimer$, completeTimer: pausableTimer$.pipe(reduce((x, y) => y)) }
  }
}

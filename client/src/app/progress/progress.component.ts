import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import * as FromMedia from '../reducers/media.reducer';
import { Observable, combineLatest, Subject, timer } from 'rxjs';
import { map, distinctUntilChanged, tap, share, debounce, throttleTime } from 'rxjs/operators';

interface Ratio {
  total: number;
  current: number;
}

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  redraw$: Subject<boolean>;
  ready$: Observable<boolean>;
  title$: Observable<string>;
  subtitle$: Observable<string>;
  mode$: Observable<string>;
  showChapter$: Observable<boolean>;
  showTime$: Observable<boolean>;
  chapter$: Observable<Ratio>;
  time$: Observable<Ratio>;


  constructor(
    private zone: NgZone,
    private cd: ChangeDetectorRef,
    private store: Store<State>) {

    this.redraw$ = new Subject();
    this.redraw$.pipe(throttleTime(100))
      .subscribe(_ => this.cd.detectChanges());

    this.ready$ = store.pipe(
      select(FromMedia.selectPlaying),
      tap(_ => this.redraw$.next()));

    this.title$ = store.pipe(
      select(FromMedia.selectTitle,
      tap(_ => this.redraw$.next())));

    this.subtitle$ = store.pipe(
      select(FromMedia.selectSubtitle),
      tap(_ => this.redraw$.next()));

    this.mode$ = store.pipe(
      select(FromMedia.selectLoading),
      map(loading => loading ? 'buffer' : 'determinate'),
      tap(_ => this.redraw$.next()));

    this.chapter$ = combineLatest(
      [ store.pipe(select(FromMedia.selectTotalChapter)),
        store.pipe(select(FromMedia.selectCurrentChapter))])
        .pipe(
          map(([total, current]) => toRatio(total, current)),
          distinctUntilChanged(),
          tap(_ => this.redraw$.next(true)),
          share());

    this.time$ = combineLatest(
      [store.pipe(select(FromMedia.selectTotalTime)),
        store.pipe(select(FromMedia.selectCurrentTime))])
        .pipe(
          map(([total, current]) => toRatio(total, current)),
          distinctUntilChanged(),
          tap(_ => this.redraw$.next()),
          share());

    this.showChapter$ = this.chapter$.pipe(map(ratio => ratio !== undefined));
    this.showTime$ = this.time$.pipe(map(ratio => ratio !== undefined));
  }

  ngOnInit() {
  }
}
function toRatio(total: number, current: number): Ratio | undefined {
  if (total === undefined || current === undefined || total === 0) {
    return undefined;
  }
  return <Ratio>{
    total: 100,
    current: Math.floor(current * 100.0 / total)
  };
}

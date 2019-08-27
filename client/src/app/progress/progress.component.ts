import { Component, OnInit, NgZone } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import * as FromMedia from '../reducers/media.reducer';
import { Observable, combineLatest } from 'rxjs';
import { map, distinctUntilChanged, share, observeOn } from 'rxjs/operators';
import { enterZone } from '../core/zone-scheduler';
import { async } from 'rxjs/internal/scheduler/async';

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
    private store: Store<State>) {

    this.ready$ = store.pipe(
      select(FromMedia.selectPlaying),
      observeOn(enterZone(this.zone, async)));

    this.title$ = store.pipe(
      select(FromMedia.selectTitle),
      observeOn(enterZone(this.zone, async)));

    this.subtitle$ = store.pipe(
      select(FromMedia.selectSubtitle),
      observeOn(enterZone(this.zone, async)));

    this.mode$ = store.pipe(
      select(FromMedia.selectLoading),
      map(loading => loading ? 'buffer' : 'determinate'),
      observeOn(enterZone(this.zone, async)));

    this.chapter$ = combineLatest(
      [ store.pipe(select(FromMedia.selectTotalChapter)),
        store.pipe(select(FromMedia.selectCurrentChapter))])
        .pipe(
          map(([total, current]) => toRatio(total, current)),
          distinctUntilChanged(),
          observeOn(enterZone(this.zone, async)),
          share());

    this.time$ = combineLatest(
      [store.pipe(select(FromMedia.selectTotalTime)),
        store.pipe(select(FromMedia.selectCurrentTime))])
        .pipe(
          map(([total, current]) => toRatio(total, current)),
          distinctUntilChanged(),
          observeOn(enterZone(this.zone, async)),
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

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import * as FromMedia from '../reducers/media.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  ready$: Observable<boolean>;
  heading$: Observable<string>;
  totalChapter$: Observable<number>;
  currentChapter$: Observable<number>;
  subtitle$: Observable<string>;
  mode$: Observable<string>;

  constructor(private store: Store<State>) {
    this.ready$ = store.pipe(select(FromMedia.selectPlaying));
    this.totalChapter$ = store.pipe(select(FromMedia.selectTotalChapter));
    this.currentChapter$ = store.pipe(select(FromMedia.selectCurrentChapter));
    this.subtitle$ = store.pipe(select(FromMedia.selectSubtitle));
    this.mode$ = store.pipe(
      select(FromMedia.selectLoading),
      map(loading => loading ? 'buffer' : 'determinate'));
  }

  ngOnInit() {
  }

}

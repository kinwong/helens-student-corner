import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PracticeContentEffects } from './practice-content.effects';

describe('PracticeContentEffects', () => {
  let actions$: Observable<any>;
  let effects: PracticeContentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PracticeContentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<PracticeContentEffects>(PracticeContentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

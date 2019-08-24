import { ActionReducerMap, createFeatureSelector, MetaReducer, ActionReducer, createSelector } from '@ngrx/store';
import * as fromPref from './pref.reducer';
import * as fromAuth from './auth.reducer';
import * as fromMedia from './media.reducer';
import * as fromPractice from './practice.reducer';

import { environment } from '../../environments/environment';

export interface State {
  pref: fromPref.State;
  auth: fromAuth.State;
  practice: fromPractice.State;
  media: fromMedia.State;
}

export const reducers: ActionReducerMap<State> = {
  pref: fromPref.reducer,
  auth: fromAuth.reducer,
  practice: fromPractice.reducer,
  media: fromMedia.reducer,
};

// console.log all actions

// export const metaReducers: MetaReducer<State>[] =
//   !environment.production ? [] : [];

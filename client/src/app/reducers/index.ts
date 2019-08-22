import { ActionReducerMap, createFeatureSelector, MetaReducer, ActionReducer, createSelector } from '@ngrx/store';
import * as fromPref from './pref.reducer';
import * as fromAuth from './auth.reducer';
import * as fromMedia from './media.reducer';
import * as fromPractice from './practice.reducer';

import { environment } from '../../environments/environment';

export interface State {
  pref: fromPref.State;
  auth: fromAuth.State;
  media: fromMedia.State;
  practice: fromPractice.State;
}

export const reducers: ActionReducerMap<State> = {
  pref: fromPref.reducer,
  auth: fromAuth.reducer,
  media: fromMedia.reducer,
  practice: fromPractice.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] =
  !environment.production ? [logger] : [];


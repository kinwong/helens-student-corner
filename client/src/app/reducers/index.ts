import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import * as fromPref from './pref.reducer';
import * as fromAuth from './auth.reducer';
import * as fromMedia from './media.reducer';
import { environment } from '../../environments/environment';

export interface State {
  pref: fromPref.State;
  auth: fromAuth.State;
  media: fromMedia.State;
}

export const reducers: ActionReducerMap<State> = {
  pref: fromPref.reducer,
  auth: fromAuth.reducer,
  media: fromMedia.reducer,
};

export const getPrefState = createFeatureSelector<fromPref.State>('course');
export const getMediaState = createFeatureSelector<fromMedia.State>('media');
export const getAuthState = createFeatureSelector<fromAuth.State>('auth');


export const metaReducers: MetaReducer<State>[] =
  !environment.production ? [] : [];

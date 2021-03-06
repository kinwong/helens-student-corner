import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export interface State {
  loggedIn: boolean;
}

const initialState: State = {
  loggedIn: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({
     ...state, loggedIn: state.loggedIn = true
  })),
  on(AuthActions.logout, state => ({
    ...state, loggedIn: state.loggedIn = false
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

export const featureName = 'auth';
export const selectAuth = createFeatureSelector<State>(featureName);

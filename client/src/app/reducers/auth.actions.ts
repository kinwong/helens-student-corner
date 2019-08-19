import { createAction, props } from '@ngrx/store';

/** Action to log in the User from the Login Page */
export const login = createAction(
  '[Auth] Login',
  props<{payload: {username: string; password: string; }}>(),
);
export const logout = createAction('[Auth] Logout');


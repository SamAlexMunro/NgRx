import { createReducer, on } from '@ngrx/store';
import { User } from '../../modules/auth/resources/auth';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    username: null,
    email: null,
    isadmin: null,
  },
  error: null,
};

function clearUser() {
  return {
    id: null,
    username: null,
    email: null,
    isadmin: null,
  };
}

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: clearUser(),
      error: action.error,
    };
  }),
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: clearUser(),
      error: null,
    };
  })
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);
export interface AuthLinksViewModel {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => {
    return state.user.id !== null;
  }
);

export const selectAuthLinksViewModel = createSelector(
  selectAuthState,
  selectIsLoggedIn,
  (state: fromAuth.State, isLoggedIn): AuthLinksViewModel => {
    return {
      isAdmin: state.user.isadmin,
      isLoggedIn,
    };
  }
);

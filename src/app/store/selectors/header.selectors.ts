import { createSelector } from '@ngrx/store';
import { selectIsAdmin, selectIsLoggedIn } from './auth.selectors';

export interface HeaderViewModel {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

export const selectHeaderAuthModel = createSelector(
  selectIsAdmin,
  selectIsLoggedIn,
  (isAdmin, isLoggedIn): HeaderViewModel => {
    return {
      isAdmin,
      isLoggedIn,
    };
  }
);

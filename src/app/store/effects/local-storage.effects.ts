import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class LocalStorageEffects {
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => localStorage.removeItem('user'))
      ),
    { dispatch: false }
  );

  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}

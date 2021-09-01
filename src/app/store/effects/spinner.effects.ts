import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

// ng generate effect store/effects/spinner --module=app.module.ts --root=true --skipTests=true

@Injectable()
export class SpinnerEffects {
  spinnerOn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginPage, AuthActions.loginModal),
        tap(() => this.spinner.show())
      );
    },
    { dispatch: false }
  );
  spinnerOff$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure, AuthActions.loginSuccess),
        tap(() => {
          // Timeout just used to show the spinner normally we'd drop this.
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        })
      );
    },
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private readonly spinner: NgxSpinnerService
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AlertEffects {
  $checkingLoginInformation = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.loginModal),
        tap(() => {
          this.alertService.info('Checking your information');
        })
      );
    },
    {
      dispatch: false,
    }
  );

  $welcomeBack = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) => {
          this.alertService.success(`Welcome back ${action.user.username}`);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  $unableToLogin = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(() => {
          this.alertService.danger('Unable to login');
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private readonly alertService: AlertService
  ) {}
}

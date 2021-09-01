import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class RouteEffects {
  rerouteToProductsPage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigate(['/shopping/products']);
        })
      );
    },
    {
      dispatch: false,
    }
  );
  rerouteToHomepage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigate(['/']);
        })
      );
    },
    {
      dispatch: false,
    }
  );
  constructor(private actions$: Actions, private readonly router: Router) {}
}

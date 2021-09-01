import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { ModalService } from './../../modules/auth/resources/modal.service';

@Injectable()
export class ModalEffects {
  closeLoginModal$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.modalService.hide();
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private readonly modalService: ModalService
  ) {}
}

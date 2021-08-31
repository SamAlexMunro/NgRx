import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CustomerSupportService } from 'src/app/shared/services/customer-support.service';
import * as supportActions from '../actions/customer-support.actions';

@Injectable()
export class CustomerSupportEffects {
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(supportActions.sendingCustomerSupportMessage),
      mergeMap((action) =>
        this.customerSupportService
          .sendMessage(action.data)
          .pipe(
            map((sent) =>
              supportActions.sendMessageStatus({ isSentSuccess: sent })
            )
          )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly customerSupportService: CustomerSupportService
  ) {}
}

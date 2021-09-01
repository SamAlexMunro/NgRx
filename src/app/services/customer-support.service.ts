import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomerSupportService } from '../shared/services/customer-support.service';

export interface CustomerSupportModel {
  name?: string;
  message?: string;
  email?: string;
  isSentSuccess?: boolean;
}

@Injectable({ providedIn: 'root' })
export class CustomerSupportServiceRxjs {
  readonly customerSupportModel$ = new BehaviorSubject<CustomerSupportModel>({
    name: null,
    message: null,
    email: null,
    isSentSuccess: null,
  });

  constructor(
    private readonly customerSupportService: CustomerSupportService
  ) {}

  submitCustomerForm(formModel: Partial<CustomerSupportModel>) {
    this.customerSupportService
      .sendMessage(formModel as any)
      .pipe(take(1))
      .subscribe((isSentSuccess) => {
        this.customerSupportModel$.next({ ...formModel, isSentSuccess });
      });
  }

  clearCustomerForm() {
    this.customerSupportModel$.next({
      name: null,
      message: null,
      email: null,
      isSentSuccess: null,
    });
  }
}

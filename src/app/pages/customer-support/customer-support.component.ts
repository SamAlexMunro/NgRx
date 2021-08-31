import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store';
import {
  clearingCustomerSupportForm,
  sendingCustomerSupportMessage,
} from './../../store/actions/customer-support.actions';
import {
  selectCustomerSupportModel,
  selectName,
} from './../../store/selector/customers-support.selectors';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSupportComponent {
  isSendSuccess: boolean | null = null;
  // Old - Can remove
  readonly name$ = this.store.pipe(select(selectName));
  readonly data$ = this.store.pipe(select(selectCustomerSupportModel));

  constructor(private readonly store: Store<AppState>) {}

  onSubmit(f: NgForm) {
    this.store.dispatch(sendingCustomerSupportMessage({ data: f.value }));
  }

  clearFeedback() {
    this.store.dispatch(clearingCustomerSupportForm());
  }
}

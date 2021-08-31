import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomerSupportService } from 'src/app/shared/services/customer-support.service';
import { AppState } from '../../store';
import { sendingCustomerSupportMessage } from './../../store/actions/customer-support.actions';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSupportComponent {
  constructor(
    private customerSupportService: CustomerSupportService,
    private readonly store: Store<AppState>
  ) {}

  isSendSuccess: boolean | null = null;

  onSubmit(f: NgForm) {
    this.store.dispatch(sendingCustomerSupportMessage({ data: f.value }));
  }

  clearFeedback() {
    this.isSendSuccess = null;
  }
}

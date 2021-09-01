import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerSupportServiceRxjs } from './../../services/customer-support.service';

@Component({
  selector: 'app-customer-support-vanilla',
  templateUrl: './customer-support-vanilla.component.html',
  styleUrls: ['./customer-support-vanilla.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerSupportVanillaComponent {
  readonly customerSupportModel$ =
    this.customerSupportServiceRxjs.customerSupportModel$;

  constructor(
    private readonly customerSupportServiceRxjs: CustomerSupportServiceRxjs
  ) {}

  onSubmit(f: NgForm) {
    this.customerSupportServiceRxjs.submitCustomerForm(f.value);
  }

  clearFeedback() {
    this.customerSupportServiceRxjs.clearCustomerForm();
  }
}

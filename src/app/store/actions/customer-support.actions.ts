import { createAction, props } from '@ngrx/store';
import { CustomerMessage } from './../../shared/models/customer-message';

/**
 * NgRx Schematic CLI
 * ng generate action store/actions/customer-support --skipTests=true
 * --skipTests :: Generate test files or not
 */

export const sendingCustomerSupportMessage = createAction(
  '[Customer Support Component] Sending Customer Support Message',
  props<{ data: CustomerMessage }>()
);

export const clearingCustomerSupportForm = createAction(
  '[Customer Support Component] Clearing Customer Support Form'
);

export const sendMessageStatus = createAction(
  '[Customer Support Effect] Sending Customer Message Status',
  props<{ isSentSuccess: boolean }>()
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  customerSupportFeatureKey,
  State,
} from './../reducers/customer-support.reducer';

export const selectCustomerSupportFeature = createFeatureSelector<State>(
  customerSupportFeatureKey
);

// Old - can remove
export const selectName = createSelector(
  selectCustomerSupportFeature,
  (state: State) => state.name
);

export interface CustomerSupportModel {
  name: string;
  isSentSuccess: boolean;
}

export const selectCustomerSupportModel = createSelector(
  selectCustomerSupportFeature,
  (state: State): CustomerSupportModel => {
    return {
      name: state.name,
      isSentSuccess: state.isSentSuccess,
    };
  }
);

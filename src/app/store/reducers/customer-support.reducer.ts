import { createReducer, on } from '@ngrx/store';
import * as supportActions from './../actions/customer-support.actions';

export const customerSupportFeatureKey = 'customerSupport';

export interface State {
  name: string;
  isSentSuccess: boolean | null;
}

export const initialState: State = {
  name: null,
  isSentSuccess: null,
};

// export class CustomerSupportReducer {
//   constructor(
//     private readonly customerSupportService: CustomerSupportService
//   ) {}

//   reducer = createReducer(
//     initialState,
//     on(supportActions.sendingCustomerSupportMessage, (state, action) => {
//       return {
//         ...state,
//         name: action.data.name,
//       };
//     }),
//     // @ts-ignore
//     on(supportActions.sendingCustomerSupportMessage, (state, action) => {
//       return this.customerSupportService
//         .sendMessage(action.data)
//         .pipe(
//           map((sent) =>
//             supportActions.sendMessageStatus({ isSentSuccess: sent })
//           )
//         );
//     }),
//     on(supportActions.sendMessageStatus, (state, action) => {
//       return {
//         ...state,
//         isSentSuccess: action.isSentSuccess,
//       };
//     })
//   );
// }

export const reducer = createReducer(
  initialState,
  on(supportActions.sendingCustomerSupportMessage, (state, action) => {
    return {
      ...state,
      name: action.data.name,
    };
  }),
  on(supportActions.sendMessageStatus, (state, action) => {
    return {
      ...state,
      isSentSuccess: action.isSentSuccess,
    };
  })
);

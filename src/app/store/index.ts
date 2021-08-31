import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

/**
 * NgRx Schematics for generating store and templating
 * ng generate store  store --module=app.module.ts --root=true --statePath=store --stateInterface=AppState
 * --module :: Target module to add the store to.
 * --root :: Is it a root module or a feature module, default is false
 * --statePath :: Folder name containing this file
 * --stateInterface :: Name of state interface
 */

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

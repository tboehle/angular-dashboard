import { createReducer, on } from '@ngrx/store';

import * as LayoutActions from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: true,
};

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(LayoutActions.closeSidenav, (state) => ({ showSidenav: false })),
  on(LayoutActions.openSidenav, (state) => ({ showSidenav: true })),
);

export const selectShowSidenav = (state: State) => state.showSidenav;

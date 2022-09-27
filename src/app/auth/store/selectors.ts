import { createFeatureSelector, createSelector } from '@ngrx/store';

import AuthState from '../models/authState';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.isSubmitting
);

export const errorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.currentUser
);

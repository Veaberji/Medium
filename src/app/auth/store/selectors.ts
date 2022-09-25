import { createFeatureSelector, createSelector } from '@ngrx/store';

import AuthState from '../models/auth-state';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmitting
);

export const errorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.currentUser
);

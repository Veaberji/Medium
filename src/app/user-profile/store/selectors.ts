import { createFeatureSelector, createSelector } from '@ngrx/store';
import UserProfileState from '../models/user-profile-state';

export const userProfileFeatureSelector =
  createFeatureSelector<UserProfileState>('userProfile');

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileState) => state.isLoading
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileState) => state.data
);

export const errorsSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileState) => state.error
);

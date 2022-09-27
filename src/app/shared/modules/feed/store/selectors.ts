import { createFeatureSelector, createSelector } from '@ngrx/store';
import FeedState from '../models/feedState';

export const feedFeatureSelector = createFeatureSelector<FeedState>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (state: FeedState) => state.isLoading
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (state: FeedState) => state.data
);

export const errorsSelector = createSelector(
  feedFeatureSelector,
  (state: FeedState) => state.error
);

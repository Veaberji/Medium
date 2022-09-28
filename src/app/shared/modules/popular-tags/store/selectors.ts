import { createFeatureSelector, createSelector } from '@ngrx/store';
import PopularTagsState from './../models/popular-tags-state';

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsState>('popularTags');

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsState) => state.isLoading
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsState) => state.data
);

export const errorsSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsState) => state.error
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditArticleState } from '../models/edit-article-state';

export const editArticleFeatureSelector =
  createFeatureSelector<EditArticleState>('editArticle');

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (state: EditArticleState) => state.isSubmitting
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (state: EditArticleState) => state.isLoading
);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (state: EditArticleState) => state.article
);

export const errorsSelector = createSelector(
  editArticleFeatureSelector,
  (state: EditArticleState) => state.errors
);

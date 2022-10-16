import { createFeatureSelector, createSelector } from '@ngrx/store';
import CreateArticleState from '../models/create-article-state';

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleState>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleState) => state.isSubmitting
);

export const errorsSelector = createSelector(
  createArticleFeatureSelector,
  (state: CreateArticleState) => state.errors
);

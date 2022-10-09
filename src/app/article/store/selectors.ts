import { createFeatureSelector, createSelector } from '@ngrx/store';
import ArticleState from '../models/article-state';

export const articleFeatureSelector =
  createFeatureSelector<ArticleState>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (state: ArticleState) => state.isLoading
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (state: ArticleState) => state.data
);

export const errorsSelector = createSelector(
  articleFeatureSelector,
  (state: ArticleState) => state.error
);

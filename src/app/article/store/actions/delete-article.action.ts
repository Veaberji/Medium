import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export const deleteArticleAction = createAction(
  ActionTypes.DeleteArticle,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DeleteArticleSuccess
);

export const deleteArticleFailureAction = createAction(
  ActionTypes.DeleteArticleFailure
);

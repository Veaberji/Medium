import { createAction, props } from '@ngrx/store';
import Article from 'src/app/shared/models/article';
import { ActionTypes } from '../actionTypes';

export const getArticleAction = createAction(
  ActionTypes.GetArticle,
  props<{ title: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GetArticleSuccess,
  props<{ article: Article }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GetArticleFailure
);

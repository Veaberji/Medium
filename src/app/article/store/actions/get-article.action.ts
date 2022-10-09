import { createAction, props } from '@ngrx/store';
import Article from 'src/app/shared/models/article';
import { ActionTypes } from '../action-types';

export const getArticleAction = createAction(
  ActionTypes.GetArticle,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GetArticleSuccess,
  props<{ article: Article }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GetArticleFailure
);

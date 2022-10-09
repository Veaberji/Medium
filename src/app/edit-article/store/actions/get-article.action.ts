import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import BackendErrors from 'src/app/shared/models/backend-errors';
import Article from 'src/app/shared/models/article';

export const getArticleAction = createAction(
  ActionTypes.GetArticle,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GetArticleSuccess,
  props<{ article: Article }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GetArticleFailure,
  props<{ errors: BackendErrors }>()
);

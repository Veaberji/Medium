import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import ArticleInput from 'src/app/shared/models/article-input';
import BackendErrors from 'src/app/shared/models/backend-errors';
import Article from 'src/app/shared/models/article';

export const createArticleAction = createAction(
  ActionTypes.CreateArticle,
  props<{ input: ArticleInput }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CreateArticleSuccess,
  props<{ article: Article }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CreateArticleFailure,
  props<{ errors: BackendErrors }>()
);

import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import ArticleInput from 'src/app/shared/models/article-input';
import BackendErrors from 'src/app/shared/models/backend-errors';
import Article from 'src/app/shared/models/article';

export const updateArticleAction = createAction(
  ActionTypes.UpdateArticle,
  props<{ slug: string; input: ArticleInput }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UpdateArticleSuccess,
  props<{ article: Article }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UpdateArticleFailure,
  props<{ errors: BackendErrors }>()
);

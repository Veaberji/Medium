import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction,
} from './actions/update-article.action';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from './actions/get-article.action';
import EditArticleState from '../models/edit-article-state';

const initialState: EditArticleState = {
  isLoading: false,
  isSubmitting: false,
  article: null,
  errors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleState => ({ ...state, isSubmitting: true })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleState => ({
      ...state,
      isSubmitting: false,
      errors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleState => ({ ...state, isSubmitting: true })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleState => ({
      ...state,
      isSubmitting: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(routerNavigationAction, (): EditArticleState => initialState)
);

export function reducers(
  state: EditArticleState,
  action: Action
): EditArticleState {
  return editArticleReducer(state, action);
}

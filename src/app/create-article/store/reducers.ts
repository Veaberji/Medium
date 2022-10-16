import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/create-article.action';
import CreateArticleState from '../models/create-article-state';

const initialState: CreateArticleState = {
  isSubmitting: false,
  errors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleState => ({ ...state, isSubmitting: true })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleState => ({
      ...state,
      isSubmitting: false,
      errors: action.errors,
    })
  ),
  on(routerNavigationAction, (): CreateArticleState => initialState)
);

export function reducers(
  state: CreateArticleState,
  action: Action
): CreateArticleState {
  return createArticleReducer(state, action);
}

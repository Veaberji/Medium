import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';
import ArticleState from '../models/articleState';

const initialState: ArticleState = {
  isLoading: false,
  data: null,
  error: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleState => ({ ...state, isLoading: true })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleState => ({ ...state, isLoading: false })
  ),
  on(routerNavigationAction, (): ArticleState => initialState)
);

export function reducers(state: ArticleState, action: Action): ArticleState {
  return articleReducer(state, action);
}

import FeedState from '../models/feedState';
import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

const initialState: FeedState = {
  isLoading: false,
  data: null,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state): FeedState => ({ ...state, isLoading: true })),
  on(
    getFeedSuccessAction,
    (state, action): FeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedState => ({ ...state, isLoading: false })
  ),
  on(routerNavigationAction, (): FeedState => initialState)
);

export function reducers(state: FeedState, action: Action): FeedState {
  return feedReducer(state, action);
}

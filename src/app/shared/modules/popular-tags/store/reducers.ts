import { Action, createReducer, on } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/get-popular-tags.action';
import PopularTagsState from '../models/popular-tags-state';

const initialState: PopularTagsState = {
  isLoading: false,
  data: null,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsState => ({ ...state, isLoading: true })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsState => ({ ...state, isLoading: false })
  )
);

export function reducers(
  state: PopularTagsState,
  action: Action
): PopularTagsState {
  return feedReducer(state, action);
}

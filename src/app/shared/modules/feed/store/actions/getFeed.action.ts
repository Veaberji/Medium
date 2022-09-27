import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import GetFeedResponse from './../../models/getFeedResponse';

export const getFeedAction = createAction(
  ActionTypes.GetFeed,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GetFeedSuccess,
  props<{ feed: GetFeedResponse }>()
);
export const getFeedFailureAction = createAction(ActionTypes.GetFeedFailure);

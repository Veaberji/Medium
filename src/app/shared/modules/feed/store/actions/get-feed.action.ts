import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import GetFeedResponse from '../../models/get-feed-response';

export const getFeedAction = createAction(
  ActionTypes.GetFeed,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GetFeedSuccess,
  props<{ feed: GetFeedResponse }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GetFeedFailure);

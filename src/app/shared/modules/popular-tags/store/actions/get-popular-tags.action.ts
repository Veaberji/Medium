import { createAction, props } from '@ngrx/store';
import { ActionType } from '../action-types';

export const getPopularTagsAction = createAction(ActionType.GetPopularTags);

export const getPopularTagsSuccessAction = createAction(
  ActionType.GetPopularTagsSuccess,
  props<{ tags: string[] }>()
);

export const getPopularTagsFailureAction = createAction(
  ActionType.GetPopularTagsFailure
);

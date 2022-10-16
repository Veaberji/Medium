import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import Profile from 'src/app/shared/models/profile';

export const getUserProfileAction = createAction(
  ActionTypes.GetUserProfile,
  props<{ slug: string }>()
);

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GetUserProfileSuccess,
  props<{ profile: Profile }>()
);

export const getUserProfileFailureAction = createAction(
  ActionTypes.GetUserProfileFailure
);

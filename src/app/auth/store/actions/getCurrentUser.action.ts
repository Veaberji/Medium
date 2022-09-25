import { createAction, props } from '@ngrx/store';
import CurrentUser from 'src/app/shared/models/currentUser';
import { ActionType } from '../actionTypes';

export const getCurrentUserAction = createAction(ActionType.GetCurrentUser);

export const getCurrentUserSuccessAction = createAction(
  ActionType.GetCurrentUserSuccess,
  props<{ currentUser: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionType.GetCurrentUserFailure
);

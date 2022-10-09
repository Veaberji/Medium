import { createAction, props } from '@ngrx/store';
import CurrentUser from 'src/app/shared/models/current-user';
import { ActionType } from '../action-types';

export const getCurrentUserAction = createAction(ActionType.GetCurrentUser);

export const getCurrentUserSuccessAction = createAction(
  ActionType.GetCurrentUserSuccess,
  props<{ currentUser: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionType.GetCurrentUserFailure
);

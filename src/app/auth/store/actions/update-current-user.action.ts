import { createAction, props } from '@ngrx/store';
import BackendErrors from 'src/app/shared/models/backend-errors';
import CurrentUser from 'src/app/shared/models/current-user';
import UserInput from 'src/app/shared/models/user-input';
import { ActionType } from '../action-types';

export const updateCurrentUserAction = createAction(
  ActionType.UpdateCurrentUser,
  props<{ userInput: UserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionType.UpdateCurrentUserSuccess,
  props<{ currentUser: CurrentUser }>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionType.UpdateCurrentUserFailure,
  props<{ errors: BackendErrors }>()
);

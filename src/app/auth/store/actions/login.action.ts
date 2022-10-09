import { createAction, props } from '@ngrx/store';
import BackendErrors from 'src/app/shared/models/backend-errors';
import CurrentUser from 'src/app/shared/models/current-user';
import LoginRequest from '../../models/login-request';
import { ActionType } from '../action-types';

export const loginAction = createAction(
  ActionType.Login,
  props<{ request: LoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionType.LoginSuccess,
  props<{ currentUser: CurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionType.LoginFailure,
  props<{ errors: BackendErrors }>()
);

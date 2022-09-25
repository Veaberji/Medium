import { createAction, props } from '@ngrx/store';
import BackendErrors from 'src/app/shared/models/backendErrors';
import CurrentUser from 'src/app/shared/models/currentUser';
import LoginRequest from '../../models/loginRequest';
import { ActionType } from '../actionTypes';

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

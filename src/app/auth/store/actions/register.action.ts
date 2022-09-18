import { createAction, props } from '@ngrx/store';

import BackendErrors from 'src/app/shared/models/backendErrors';
import CurrentUser from 'src/app/shared/models/currentUser';
import RegisterRequest from '../../models/registerRequest';
import { ActionType } from '../actionTypes';

export const registerAction = createAction(
  ActionType.Register,
  props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionType.RegisterSuccess,
  props<{ currentUser: CurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionType.RegisterFailure,
  props<{ errors: BackendErrors }>()
);

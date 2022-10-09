import { createAction, props } from '@ngrx/store';

import BackendErrors from 'src/app/shared/models/backend-errors';
import CurrentUser from 'src/app/shared/models/current-user';
import RegisterRequest from '../../models/register-request';
import { ActionType } from '../action-types';

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

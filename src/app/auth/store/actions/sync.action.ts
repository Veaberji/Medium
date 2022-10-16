import { createAction } from '@ngrx/store';
import { ActionType } from '../action-types';

export const logoutAction = createAction(ActionType.Logout);

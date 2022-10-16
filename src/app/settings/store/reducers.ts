import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from './../../auth/store/actions/update-current-user.action';
import SettingsState from '../models/settings-state';

const initialState: SettingsState = {
  isSubmitting: false,
  errors: null,
};

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsState => ({ ...state, isSubmitting: true })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsState => ({
      ...state,
      isSubmitting: false,
      errors: action.errors,
    })
  ),
  on(routerNavigationAction, (): SettingsState => initialState)
);

export function reducers(state: SettingsState, action: Action): SettingsState {
  return settingsReducer(state, action);
}

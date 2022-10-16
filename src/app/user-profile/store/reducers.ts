import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction,
} from './actions/get-user-profile.action';
import UserProfileState from '../models/user-profile-state';

const initialState: UserProfileState = {
  isLoading: false,
  data: null,
  error: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileState => ({ ...state, isLoading: true })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileState => ({
      ...state,
      isLoading: false,
      data: action.profile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileState => ({ ...state, isLoading: false })
  ),
  on(routerNavigationAction, (): UserProfileState => initialState)
);

export function reducers(
  state: UserProfileState,
  action: Action
): UserProfileState {
  return articleReducer(state, action);
}

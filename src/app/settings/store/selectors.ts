import { createFeatureSelector, createSelector } from '@ngrx/store';
import SettingsState from '../models/settings-state';

export const settingsSelector =
  createFeatureSelector<SettingsState>('settings');

export const isSubmittingSelector = createSelector(
  settingsSelector,
  (state: SettingsState) => state.isSubmitting
);

export const errorsSelector = createSelector(
  settingsSelector,
  (state: SettingsState) => state.errors
);

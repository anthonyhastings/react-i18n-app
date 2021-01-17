import { createSelector } from 'reselect';
import * as settingsReducerExports from 'reducers/settings';

const settingsSelector = (state) => state.get('settings');

export const currentLocaleSelector = createSelector(
  settingsSelector,
  settingsReducerExports.currentLocaleSelector
);

export const nameSelector = createSelector(
  settingsSelector,
  settingsReducerExports.nameSelector
);

export const genderSelector = createSelector(
  settingsSelector,
  settingsReducerExports.genderSelector
);

export const unreadMessagesSelector = createSelector(
  settingsSelector,
  settingsReducerExports.unreadMessagesSelector
);

export const walletValueSelector = createSelector(
  settingsSelector,
  settingsReducerExports.walletValueSelector
);

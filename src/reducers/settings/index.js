import Immutable from 'immutable';
import { en } from 'constants/locales';

const defaultState = Immutable.fromJS({
  currentLocale: en,
  name: 'Anthony',
  unreadMessages: 31,
  walletValue: 123.456789
});

const SET_CURRENT_LOCALE = 'SET_CURRENT_LOCALE';
const SET_NAME = 'SET_NAME';
const SET_UNREAD_MESSAGES = 'SET_UNREAD_MESSAGES';
const SET_WALLET_VALUE = 'SET_WALLET_VALUE';

export const setCurrentLocale = (locale) => ({
  type: SET_CURRENT_LOCALE,
  locale
});

export const setName = (name) => ({
  type: SET_NAME,
  name
});

export const setWalletValue = (walletValue) => ({
  type: SET_WALLET_VALUE,
  walletValue
});

export const setUnreadMessages = (unreadMessages) => ({
  type: SET_UNREAD_MESSAGES,
  unreadMessages
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCALE:
      return state.set('currentLocale', action.locale);

    case SET_NAME:
      const normalisedName = action.name.length === 0 ? undefined : action.name;
      return state.set('name', normalisedName);

    case SET_UNREAD_MESSAGES:
      const normalisedUnreadMessages =
        action.unreadMessages.length === 0
          ? undefined
          : parseFloat(action.unreadMessages);
      return state.set('unreadMessages', normalisedUnreadMessages);

    case SET_WALLET_VALUE:
      const normalisedWalletValue =
        action.walletValue.length === 0
          ? undefined
          : parseFloat(action.walletValue);
      return state.set('walletValue', normalisedWalletValue);

    default:
      return state;
  }
};

export default reducer;

export const currentLocaleSelector = (state) => state.get('currentLocale');

export const nameSelector = (state) => state.get('name');

export const unreadMessagesSelector = (state) => state.get('unreadMessages');

export const walletValueSelector = (state) => state.get('walletValue');

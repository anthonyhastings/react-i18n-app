import { connect } from 'react-redux';
import Component from '../';
import {
  nameSelector,
  genderSelector,
  unreadMessagesSelector,
  walletValueSelector
} from 'selectors';
import {
  setName,
  setGender,
  setUnreadMessages,
  setWalletValue
} from 'reducers/settings';

const mapStateToProps = (state) => ({
  name: nameSelector(state),
  gender: genderSelector(state),
  unreadMessages: unreadMessagesSelector(state),
  walletValue: walletValueSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  setName(name) {
    dispatch(setName(name));
  },
  setGender(gender) {
    dispatch(setGender(gender));
  },
  setUnreadMessages(unreadMessages) {
    dispatch(setUnreadMessages(unreadMessages));
  },
  setWalletValue(walletValue) {
    dispatch(setWalletValue(walletValue));
  }
});

const ExampleStringsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ExampleStringsContainer;

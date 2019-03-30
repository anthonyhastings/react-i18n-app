import { connect } from 'react-redux';
import Component from '../';
import {
  nameSelector,
  unreadMessagesSelector,
  walletValueSelector
} from 'selectors';
import { setName, setUnreadMessages, setWalletValue } from 'reducers/settings';

const mapStateToProps = (state) => ({
  name: nameSelector(state),
  unreadMessages: unreadMessagesSelector(state),
  walletValue: walletValueSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  setName(name) {
    dispatch(setName(name));
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

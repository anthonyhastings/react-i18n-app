import { connect } from 'react-redux';
import Component from '../';
import { currentLocaleSelector } from 'selectors';

const mapStateToProps = (state) => ({
  locale: currentLocaleSelector(state)
});

const IntlProviderContainer = connect(mapStateToProps)(Component);

export default IntlProviderContainer;

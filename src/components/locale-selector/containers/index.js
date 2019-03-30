import { connect } from 'react-redux';
import Component from '../';
import { setCurrentLocale } from 'reducers/settings';
import { currentLocaleSelector } from 'selectors';
import locales from 'constants/locales';

const mapStateToProps = (state) => ({
  selectedLocale: currentLocaleSelector(state),
  locales
});

const mapDispatchToProps = (dispatch) => ({
  onChange(locale) {
    dispatch(setCurrentLocale(locale));
  }
});

const LocaleSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default LocaleSelectorContainer;

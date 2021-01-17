import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import locales from 'constants/locales';
import './stylesheets/index.css';

const namespace = 'locale-selector';

const LocaleSelector = ({ locales, onChange, selectedLocale }) => {
  const options = locales.map((locale) => (
    <option key={locale}>{locale}</option>
  ));

  return (
    <div className={namespace}>
      <FormattedMessage
        id="locale-selector.label"
        defaultMessage="Choose a locale:"
        description="Label for a dropdown allowing user to change locale."
      >
        {(txt) => <label htmlFor="locale-selector">{txt}</label>}
      </FormattedMessage>

      <select
        className={`${namespace}__control`}
        id="locale-selector"
        onChange={(e) => onChange(e.currentTarget.value)}
        value={selectedLocale}
      >
        {options}
      </select>
    </div>
  );
};

LocaleSelector.propTypes = {
  locales: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedLocale: PropTypes.oneOf(locales).isRequired
};

export default LocaleSelector;

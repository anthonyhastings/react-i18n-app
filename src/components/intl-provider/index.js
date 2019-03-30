import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as OriginalIntlProvider } from 'react-intl';
import locales from 'constants/locales';
import numberFormats from 'constants/number-formats';
import translations from 'translations';

const IntlProvider = ({ children, locale }) => {
  return (
    <OriginalIntlProvider
      defaultFormats={numberFormats}
      formats={numberFormats}
      key={locale}
      locale={locale}
      messages={translations[locale]}
    >
      {children}
    </OriginalIntlProvider>
  );
};

IntlProvider.propTypes = {
  locale: PropTypes.oneOf(locales).isRequired
};

export default IntlProvider;

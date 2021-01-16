import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider as OriginalIntlProvider } from 'react-intl';
import locales from 'constants/locales';
import numberFormats from 'constants/number-formats';
import translations from 'translations';
import useI18nPolyfills from './use-i18n-polyfills';
import './stylesheets/index.css';

const IntlProvider = ({ children, locale }) => {
  const canRender = useI18nPolyfills(locale);

  if (!canRender) {
    return (
      <div className="intl-provider">
        <span className="intl-provider__loader" />
      </div>
    );
  }

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

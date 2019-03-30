import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import store from 'store';
import App from 'components/app';
import IntlProvider from 'components/intl-provider/containers';

// Adding locale information (plural rules, date formats) for supported locales.
addLocaleData([...de, ...en, ...es, ...fr]);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

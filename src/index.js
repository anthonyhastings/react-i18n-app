import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'components/app';
import IntlProvider from 'components/intl-provider/containers';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

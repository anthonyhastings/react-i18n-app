import React from 'react';
import 'normalize.css';
import './stylesheets/index.css';
import LocaleSelector from 'components/locale-selector/containers';
import ExampleStrings from 'components/example-strings/containers';

const App = () => {
  return (
    <div className="app">
      <LocaleSelector />
      <ExampleStrings />
    </div>
  );
};

export default App;

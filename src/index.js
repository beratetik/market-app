import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import GlobalStyle from './shared/styles/globalStyles';
import FontStyle from './assets/fonts/fonts';

import store from './shared/store'

ReactDOM.render(
  <React.Fragment>
    <FontStyle />
    <GlobalStyle />
    <Provider {...{ store }}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

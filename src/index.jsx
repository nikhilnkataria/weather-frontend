import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './Store/Store';

const jsx = (
  <Provider store={Store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

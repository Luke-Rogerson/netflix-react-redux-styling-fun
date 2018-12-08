import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Dashboard/Dashboard';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
  <Dashboard />
  </Provider>,
  document.getElementById('root')
  );

serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';

// Reducers
import appReducers from './src/redux/reducers/reducers';

let store = createStore(appReducers, {
  boardSize: { width: 6, height: 4 },
  heroPosition: { x: 0, y: 0 },
  numbers: []
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

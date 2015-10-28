import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import app from './src/redux/reducers/reducers';

let store = createStore(app, {
  boardSize: { width: 4, height: 2 },
  heroPosition: { x: 0, y: 0}
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

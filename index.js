import React from 'react';
import { render } from 'react-dom';

// Redux utility functions
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// Connect redux with react
import { Provider } from 'react-redux';

// App container
import App from './src/containers/App';

// Reducers
import hero from './src/redux/reducers/hero';
import board from './src/redux/reducers/board';
import values from './src/redux/reducers/values';

// React/redux router
import { Route } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';

// App routes
const routes = (
  <Route path="/" component={App}>
  </Route>
);

// Insert routing state into app state
let reducer = combineReducers({
  hero,
  board,
  values,
  router: routerStateReducer
});

// Compose reduxReactRouter with other store enhancers
const store = compose(
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(reducer, {
  board: { size: { width: 6, height: 4 }},
  hero: { position: { x: 0, y: 0 }},
  values: []
});

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>

  </div>,
  document.getElementById('app')
);

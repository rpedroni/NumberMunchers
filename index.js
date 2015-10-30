import React from 'react';
import { render } from 'react-dom';

// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import { Provider } from 'react-redux';

import App from './src/containers/App';

// Reducers
import appReducers from './src/redux/reducers/reducers';

const finalCreateStore = compose(
  // Enables your middleware:
  // applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(appReducers, {
  boardSize: { width: 6, height: 4 },
  heroPosition: { x: 0, y: 0 },
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

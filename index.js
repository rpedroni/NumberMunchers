import React from 'react';
import { render } from 'react-dom';

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// Connect redux with react
import { Provider } from 'react-redux';

// Containers & Screens
import Wrapper from './src/containers/Wrapper';
import Home from './src/containers/Home';
import Game from './src/containers/Game';

// React/redux router
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import configureStore from './src/redux/configureStore';

// Create store with initial states
const store = configureStore({
  board: { size: { width: 6, height: 4 }},
  hero: { position: { x: 0, y: 0 }},
  values: []
});

render(
  <div>
    <Provider store={store}>
      <ReduxRouter>

        <Route path="/" component={Wrapper}>
          <IndexRoute component={Home}/>
          <Route path="/game" component={Game}/>
        </Route>

      </ReduxRouter>
    </Provider>

    {/*
      <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
      */}

    </div>,
    document.getElementById('app')
  );

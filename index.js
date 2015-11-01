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

// Containers & Screens
import Wrapper from './src/containers/Wrapper';
import Home from './src/containers/Home';
import Game from './src/containers/Game';

// Reducers
import hero from './src/redux/reducers/hero';
import board from './src/redux/reducers/board';
import values from './src/redux/reducers/values';

// React/redux router
import { Route, IndexRoute } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';

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
    createHistory
  }),
  devTools()
)(createStore)(reducer,

  // Pass in initial state
  {
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

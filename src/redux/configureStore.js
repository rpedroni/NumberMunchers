// Redux utility functions
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
// Redux DevTools store enhancers
import { devTools } from 'redux-devtools';
// Redux thunk middleware
import thunk from 'redux-thunk';

// Redux routing
import { routerStateReducer, reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

// Reducers
import hero from './reducers/hero';
import board from './reducers/board';
import values from './reducers/values';

// Insert routing state into app state
let reducer = combineReducers({
  hero,
  board,
  values,
  router: routerStateReducer
});

// Compose reduxReactRouter with other store enhancers
const createSpecializedStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    createHistory
  }),
  devTools()
)(createStore);

// const createSpecializedStore = compose(
//   reduxReactRouter({
//     createHistory
//   }),
//   devTools()
// )(createStore);

export default function configureStore(initialState) {
  return createSpecializedStore(reducer, initialState);
}

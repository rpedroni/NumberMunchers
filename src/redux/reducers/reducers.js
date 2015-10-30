import reduceReducers from 'reduce-reducers';

import levelReducer from './level';
import heroActionsReducer from './hero-actions';
import valuesReducer from './values';

// NOTICE !!!
// We are using REDUCE-REDUCERS to share app state between reducers since in this
// case we need shared state

export default reduceReducers(
  levelReducer,
  heroActionsReducer,
  valuesReducer
);

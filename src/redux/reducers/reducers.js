import { combineReducers } from 'redux';

import board from './board';
import hero from './hero';
import values from './values';

// NOTICE !!!
// We are using REDUCE-REDUCERS to share app state between reducers since in this
// case we need shared state

export default combineReducers({
  board,
  hero,
  values
});

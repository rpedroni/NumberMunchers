import {
  GENERATE_NUMBERS
} from '../actions/actions';

import { RANDOM_NUMBERS } from '../../utils/NumberGenerator';

// Export app reducer
export default function numbersReducer(state, action) {

  // console.log(`Action: ${action.type} | Value:`, action);

  switch (action.type) {

    case GENERATE_NUMBERS:
    // TODO: not using state or action.rule for anything yet
    switch (action.rule) {

      // Random values
      default:
      return Object.assign({}, state, { numbers: RANDOM_NUMBERS.slice(0, action.quantity) });

    }

    default:
    return state;
  }
}

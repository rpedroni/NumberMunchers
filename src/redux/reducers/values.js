import {
  GENERATE_VALUES
} from '../actions/actions';

import { RANDOM_NUMBERS } from '../../utils/ValueGenerator';

// Export app reducer
export default function values(state = [], action) {

  // console.log(`Action: ${action.type} | Value:`, action);

  switch (action.type) {

    case GENERATE_VALUES:
    // TODO: not using state or action.rule for anything yet
    switch (action.rule) {

      // Random values
      default:
      return RANDOM_NUMBERS.slice(0, action.quantity);

    }

    default:
    return state;
  }
}

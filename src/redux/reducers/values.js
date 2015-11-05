import {
  GENERATE_VALUES,
  PLAYER_ACTION_EAT
} from '../actions/actions';

import { RANDOM_NUMBERS } from '../../utils/ValueGenerator';

// Export app reducer
export default function values(state = [], action) {

  switch (action.type) {

    case GENERATE_VALUES:
      // TODO: not using state or action.rule for anything yet
      switch (action.rule) {
        // Random values
        default:
        return RANDOM_NUMBERS.slice(0, action.quantity);
      }
      break;

    case PLAYER_ACTION_EAT:
      return [
        ...state.slice(0, action.index),
        '',
        ...state.slice(action.index + 1)
      ];
      return state;

    default:
    return state;
  }
}

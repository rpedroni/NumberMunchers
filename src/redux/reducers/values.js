import {
  ACTIONS,
  ValueRuleTypes
} from '../actions/actions';

const initialState = {
  title: '',
  options: [],
  correctCount: 0
};

// Export app reducer
export default function values(state = initialState, action) {

  switch (action.type) {

    // Values are generated in thunk'd action creator in actions.js, using ValueGenerator
    case ACTIONS.GENERATE_VALUES:
      return action.values;
      break;

    case ACTIONS.PLAYER_ACTION_EAT:
      const { options } = state;
      let option = options[action.index];
      let newOptions = [
        ...options.slice(0, action.index),
        Object.assign({}, option, { text: '' }),
        ...options.slice(action.index + 1)
      ];
      return Object.assign({}, state, { options: newOptions });

    default:
    return state;
  }
}

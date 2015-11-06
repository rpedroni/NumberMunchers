import {
  GENERATE_VALUES,
  PLAYER_ACTION_EAT,
  ValueRuleTypes
} from '../actions/actions';

import ValueGenerator from '../../utils/ValueGenerator';
let valueGenerator = new ValueGenerator();

const initialState = {
  title: '',
  options: [],
  correctCount: 0
};

// Export app reducer
export default function values(state = initialState, action) {

  switch (action.type) {

    case GENERATE_VALUES:

      switch (action.rule) {

        // Multiples
        case ValueRuleTypes.Multiples:
          return valueGenerator.multiples(action.quantity);

        // Equal sums
        case ValueRuleTypes.EqualToSums:
          return valueGenerator.equalToSum(action.quantity);

        // Prime numbers
        default:
          return valueGenerator.primeNumbers(action.quantity);
      }
      break;

    case PLAYER_ACTION_EAT:
      const { options } = state;
      let option = options[action.index];
      console.log(option.correct);
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

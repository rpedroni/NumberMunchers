
export const ACTIONS = {
  PLAYER_MOVED: 'PLAYER_MOVED',
  PLAYER_ACTION_EAT: 'PLAYER_ACTION_EAT',
  GENERATE_VALUES: 'GENERATE_VALUES',
  NUMBERS_GENERATED: 'NUMBERS_GENERATED',
  HERO_LOSE_LIFE: 'HERO_LOSE_LIFE'
};

export const PlayerMoveDirections = {
  UP: 'DIRECTION_UP',
  DOWN: 'DIRECTION_DOWN',
  LEFT: 'DIRECTION_LEFT',
  RIGHT: 'DIRECTION_RIGHT'
};

export function playerMoved(position) {
  return {
    type: ACTIONS.PLAYER_MOVED,
    position
  };
}
//
function _playerEat(index) {
  return {
    type: ACTIONS.PLAYER_ACTION_EAT,
    index
  };
}

export function playerEat(index) {
  return (dispatch, getState) => {

    let { values } = getState();
    let option = values.options[index];
    // Lose life when eating a wrong value, dispatch
    if (option.correct === false)
      dispatch(_loseLife());

    dispatch(_playerEat(index));
  };
}

function _loseLife() {
  return {
    type: ACTIONS.HERO_LOSE_LIFE
  };
}

//
export const ValueRuleTypes = {
  PrimeNumbers: 'RULE_PRIMENUMBERS',
  Multiples: 'RULE_MULTIPLES',
  EqualToSums: 'RULE_EQUAL_SUMS'
};

function _generateValues(values) {
  return {
    type: ACTIONS.GENERATE_VALUES,
    values
  };
}

import ValueGenerator from '../../utils/ValueGenerator';
let valueGenerator = new ValueGenerator();

export function generateValues(rule, quantity) {
  return (dispatch, getState) => {
    let values;
    switch (rule) {
      // Multiples
      case ValueRuleTypes.Multiples:
      values = valueGenerator.multiples(quantity);
      break;
      // Equal sums
      case ValueRuleTypes.EqualToSums:
      values = valueGenerator.equalToSum(quantity);
      break;
      // Prime numbers
      default:
      values = valueGenerator.primeNumbers(quantity);
      break;
    }
    dispatch(_generateValues(values));
  };
}

//
export function numbersGenerated(numbers) {
  return {
    type: ACTIONS.NUMBERS_GENERATED,
    numbers: numbers
  };
}
//

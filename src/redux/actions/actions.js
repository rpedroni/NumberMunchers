
export const PLAYER_MOVED = 'PLAYER_MOVED';
export const PlayerMoveDirections = {
  UP: 'DIRECTION_UP',
  DOWN: 'DIRECTION_DOWN',
  LEFT: 'DIRECTION_LEFT',
  RIGHT: 'DIRECTION_RIGHT'
};

export function playerMoved(position) {
  return {
    type: PLAYER_MOVED,
    position
  };
}
//
export const PLAYER_ACTION_EAT = 'PLAYER_ACTION_EAT';
export function playerEat() {
  return { type: PLAYER_ACTION_EAT };
}

//
export const GENERATE_VALUES = 'GENERATE_VALUES';
export function generateValues(rule, quantity) {
  return {
    type: GENERATE_VALUES,
    rule,
    quantity
  };
}
//
export const NUMBERS_GENERATED = 'NUMBERS_GENERATED';
export function numbersGenerated(numbers) {
  return {
    type: NUMBERS_GENERATED,
    numbers: numbers
  };
}
//


export const PLAYER_MOVED = 'PLAYER_MOVED';
export const PlayerMoveDirections = {
  UP: 'DIRECTION_UP',
  DOWN: 'DIRECTION_DOWN',
  LEFT: 'DIRECTION_LEFT',
  RIGHT: 'DIRECTION_RIGHT'
};

export function playerMoved(direction) {
  return {
    type: PLAYER_MOVED,
    direction: direction
  };
}
//
export const PLAYER_ACTION_EAT_NUMBER = 'PLAYER_ACTION_EAT_NUMBER';
export function playerEatNumber() {
  return { type: PLAYER_ACTION_EAT_NUMBER };
}

//
export const GENERATE_NUMBERS = 'GENERATE_NUMBERS';
export function generateNumbers(rule, quantity) {
  return {
    type: GENERATE_NUMBERS,
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

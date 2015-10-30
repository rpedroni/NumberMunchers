
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
export const BEGIN_LEVEL = 'BEGIN_LEVEL';
export function beginLevel() {
  return { type: BEGIN_LEVEL };
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

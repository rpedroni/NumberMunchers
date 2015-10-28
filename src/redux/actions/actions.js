
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

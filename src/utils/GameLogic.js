
// Functions to help with game logic

import { PlayerMoveDirections } from '../redux/actions/actions';

export function handleHeroMove(position, direction, size) {
  let out = Object.assign({}, position); // Copying to not change the original
  switch (direction) {
    case PlayerMoveDirections.UP:
      if (position.y > 0) out.y--;
      break;
    case PlayerMoveDirections.DOWN:
      if (position.y < size.height - 1) out.y++;
      break;
    case PlayerMoveDirections.LEFT:
      if (position.x > 0) out.x--;
      break;
    case PlayerMoveDirections.RIGHT:
      if (position.x < size.width - 1) out.x++;
      break;
  }
  return out;
}

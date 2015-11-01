import { PlayerMoveDirections } from '../redux/actions/actions';

// Handles logic of game, including where hero can move, interaction with other
// elements, if he dies or wins, etc.
export default class GameLogic {

  handleHeroMove(position, direction, size) {
    let out = { x: position.x, y: position.y }; // Copying to not change the original
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
  
}

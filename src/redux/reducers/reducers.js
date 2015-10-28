import {
  PLAYER_MOVED,
  playerMoved,
  PlayerMoveDirections
} from '../actions/actions';

const initialState = {
  boardSize: { width: 6, height: 5 },
  heroPosition: { x: 0, y: 0 },
};

export default function app(state = initialState, action) {

  switch (action.type) {
    case PLAYER_MOVED:
      return Object.assign({}, state, handleHeroMove(state.heroPosition, action.direction, state.boardSize));
    default:
      return state;
  }
}

function handleHeroMove(position, direction, size) {
  let out = position;
  switch (direction) {
    case PlayerMoveDirections.UP:
      if (position.y > 0) out.y--;
      break;
    case PlayerMoveDirections.DOWN:
      if (position.y < size.height) out.y++;
      break;
    case PlayerMoveDirections.LEFT:
      if (position.x > 0) out.x--;
      break;
    case PlayerMoveDirections.RIGHT:
      if (position.x < size.width) out.x++;
      break;
  }
  return out;
}

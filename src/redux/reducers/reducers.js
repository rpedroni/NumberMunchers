import {
  PLAYER_MOVED,
  playerMoved,
  PlayerMoveDirections,
  beginLevel, BEGIN_LEVEL
} from '../actions/actions';

const initialState = {
  boardSize: { width: 6, height: 5 },
  heroPosition: { x: 0, y: 0 },
};

// Export app reducer
export default
function app(state = initialState, action) {

  console.log(`Action: ${action.type} | Value:`, action);

  switch (action.type) {

    case BEGIN_LEVEL:
      return state;

    case PLAYER_MOVED:
      let newHP = handleHeroMove(state.heroPosition, action.direction, state.boardSize);
      return Object.assign({}, state, { heroPosition: { x: newHP.x, y: newHP.y } });
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

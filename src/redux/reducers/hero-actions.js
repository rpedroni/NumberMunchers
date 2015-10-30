import {
  PLAYER_MOVED,
  playerMoved,
  PlayerMoveDirections
} from '../actions/actions';

// Export app reducer
export default function heroActionsReducer(state, action) {

  console.log(`Action: ${action.type} | Value:`, action);

  switch (action.type) {

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

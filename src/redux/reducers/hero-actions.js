import {
  PLAYER_MOVED,
  playerMoved,
  PlayerMoveDirections
} from '../actions/actions';

// Export app reducer
export default function heroActionsReducer(state, action) {

  switch (action.type) {

    case PLAYER_MOVED:
      return Object.assign({}, state, { heroPosition: { x: action.position.x, y: action.position.y } });

    default:
      return state;
  }
}

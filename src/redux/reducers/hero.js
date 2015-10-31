import {
  PLAYER_MOVED,
  playerMoved,
  PlayerMoveDirections
} from '../actions/actions';

const initialState = {
  lives: 0,
  position: { x: 0, y: 0 }
};

// Export app reducer
export default function hero(state = initialState, action) {

  switch (action.type) {

    case PLAYER_MOVED:
    return { position: { x: action.position.x, y: action.position.y } };

    default:
    return state;
  }
}

import {
  ACTIONS,
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

    case ACTIONS.PLAYER_MOVED:
    return Object.assign({}, state, { position: { x: action.position.x, y: action.position.y } });

    case ACTIONS.HERO_LOSE_LIFE:
    let { lives } = state;
    console.log(state, lives);
    return Object.assign({}, state, { lives: lives - 1 });

    default:
    return state;
  }
}

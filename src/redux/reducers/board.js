import {
} from '../actions/actions';

const initialState = {
  size: {
    width: 6,
    height: 4
  }
};

// Export app reducer
export default function board(state = initialState, action) {

  switch (action.type) {
    default:
    return state;
  }
}

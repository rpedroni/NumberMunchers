import {
  beginLevel, BEGIN_LEVEL
} from '../actions/actions';

// Export app reducer
export default function levelReducer(state, action) {

  // console.log(`Action: ${action.type} | Value:`, action);

  switch (action.type) {

    case BEGIN_LEVEL:
      return state;

    default:
      return state;
  }
}

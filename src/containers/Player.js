import React from 'react';
import { connect } from 'react-redux';
import { playerMoved, PlayerMoveDirections } from '../redux/actions/actions';

class Player extends React.Component {

  // Add and remove keyboard event listener to check for Player's moves
  componentWillMount() {
    window.addEventListener('keydown', (k) => this.keydown(k) );
  }
  componentWillUnmount() {
    window.removeEventListener('keydown');
  }

  // Detect which key the player pressed
  keydown(key) {
    let direction = null;
    switch (key.keyIdentifier) {
      case 'Left': direction = PlayerMoveDirections.LEFT; break;
      case 'Right': direction = PlayerMoveDirections.RIGHT; break;
      case 'Up':  direction = PlayerMoveDirections.UP; break;
      case 'Down':  direction = PlayerMoveDirections.DOWN; break;
      default:
        break;
    }
    if (direction) {
      this.props.dispatch(playerMoved(direction));
    }
  }

  render() {
    return (
      <span>{/* Our mighty player */}</span>
    );
  }
}

export default connect()(Player);

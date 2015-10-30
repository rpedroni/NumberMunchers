import React, { PropTypes } from 'react';
import { PlayerMoveDirections } from '../redux/actions/actions';

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

    // Move
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
      this.props.playerMove(direction);
      return;
    }

    // Eat
    switch (key.keyIdentifier) {
      case 'U+0020': // Space
      case 'Enter': // Enter
      this.props.playerEat();
      break;
      default:
      break;
    }

  }

  render() {
    return (
      <span>{/* Our mighty player */}</span>
    );
  }
}
Player.propTypes = {
  playerMove: PropTypes.func.isRequired,
  playerEat: PropTypes.func.isRequired
};

export default Player;

import React from 'react';

class Player extends React.Component {

  // Add and remove keyboard event listener to check for Player's moves
  componentWillMount() {
    window.addEventListener('keydown', this.keydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown');
  }

  // Detect which key the player pressed
  keydown(key) {
    switch (key.keyIdentifier) {
      case 'Left':
      case 'Right':
      case 'Up':
      case 'Down':
        console.log('hey');
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

export default Player;

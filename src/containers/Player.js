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
    console.log(key.keyIdentifier);
  }

  render() {
    return (
      <span></span>
    );
  }
}

export default Player;

import React from 'react';

class Player extends React.Component {

  componentWillMount() {
    window.addEventListener('keydown', this.keydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown');
  }

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

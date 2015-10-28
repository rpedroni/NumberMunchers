import React from 'react';

import GameBoard from './GameBoard';
import Player from './Player';

class App extends React.Component {
  render() {
    return (
      <div>
        <Player />
        <GameBoard />
      </div>
    );
  }
}

export default App;

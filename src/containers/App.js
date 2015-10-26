import React from 'react';

import GameBoard from './GameBoard';
import Player from './Player';

class App extends React.Component {
  render() {
    return (
      <div>
        <GameBoard />
        <Player />
      </div>
    );
  }
}

export default App;

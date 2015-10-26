import React from 'react';

import Grid from '../components/Grid';
import RuleDisplay from '../components/RuleDisplay';

class GameBoard extends React.Component {

  render() {
    let style = {
      fontFamily: 'Oswald, Roboto, sans'
    };
    return (
      <div style={style}>
        <RuleDisplay />
        <Grid />
      </div>
    );

  }

}

export default GameBoard;

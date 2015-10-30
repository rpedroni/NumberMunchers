import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { beginLevel } from '../redux/actions/actions';

import GameBoard from './GameBoard';
import Player from './Player';

class App extends React.Component {

  componentWillMount() {
    // TODO: still dumb level start - update this later
    // Signal level start
    this.props.dispatch(beginLevel());
  }

  render() {
    let { heroPosition, boardSize } = this.props;
    return (
      <div>
        <Player />
        <GameBoard heroPosition={heroPosition} boardSize={boardSize} />
      </div>
    );
  }
}

App.propTypes = {
  boardSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  heroPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};


function select(state) {
  return {
    boardSize: state.boardSize,
    heroPosition: state.heroPosition
  };
}
export default connect(select)(App);

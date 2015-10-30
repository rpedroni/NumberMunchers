import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import { generateNumbers } from '../redux/actions/actions';

// Components
import GameBoard from './GameBoard';
import Player from './Player';

// Utils
import NumberGenerator from '../utils/NumberGenerator';

class App extends React.Component {

  componentWillMount() {
    // TODO: still dumb level start - update this later
    // Signal level start
    this.props.dispatch(generateNumbers(null, this.props.boardSize.width * this.props.boardSize.height));
  }

  render() {
    let { heroPosition, boardSize, numbers } = this.props;
    return (
      <div>
        <Player />
        <GameBoard heroPosition={heroPosition} boardSize={boardSize} numbers={numbers} />
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

function mapStateToProps(state) {
  return {
    boardSize: state.boardSize,
    heroPosition: state.heroPosition,
    numbers: state.numbers
  };
}
export default connect(mapStateToProps)(App);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import {
  // Numbers
  generateValues,
  // Player
  playerMoved,
  playerEat
} from '../redux/actions/actions';

// Components
import GameBoard from '../components/GameBoard';
import Player from '../components/Player';

// Utils
import GameLogic from '../utils/GameLogic';
let gameLogic = new GameLogic();

class Game extends React.Component {

  componentWillMount() {

    // TODO: still dumb level start - update this later
    // Signal level start
    this.props.dispatch(
      generateValues(null, this.props.boardSize.width * this.props.boardSize.height)
    );
  }

  // Handle player wanting to move hero
  playerMove(direction) {
    let newHP = gameLogic.handleHeroMove(this.props.heroPosition, direction, this.props.boardSize);
    this.props.dispatch(playerMoved(newHP));
  }
  // Handle "eat" command
  playerEat() {
    this.props.dispatch(playerEat());
  }

  render() {
    let { heroPosition, boardSize, values } = this.props;
    return (
      <div>
        <Player playerMove={this.playerMove.bind(this)} playerEat={this.playerEat.bind(this)} />
        <GameBoard heroPosition={heroPosition} boardSize={boardSize} values={values} />
      </div>
    );
  }
}

Game.propTypes = {
  boardSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  heroPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  values: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    boardSize: state.board.size,
    heroPosition: state.hero.position,
    values: state.values
  };
}
export default connect(mapStateToProps)(Game);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions
import {
  // Numbers
  generateValues,
  // Player
  playerMoved, PlayerMoveDirections,
  playerEat
} from '../redux/actions/actions';

// Components
import GameBoard from '../components/GameBoard';
import Player from './Player';

// Utils
import { handleHeroMove } from '../utils/GameLogic';

class App extends React.Component {

  componentWillMount() {

    console.log(this.props);

    // TODO: still dumb level start - update this later
    // Signal level start
    this.props.dispatch(
      generateValues(null, this.props.boardSize.width * this.props.boardSize.height)
    );
  }

  playerMove(direction) {
    let newHP = handleHeroMove(this.props.heroPosition, direction, this.props.boardSize);
    this.props.dispatch(playerMoved(newHP));
  }
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

App.propTypes = {
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
export default connect(mapStateToProps)(App);

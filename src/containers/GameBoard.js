import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Grid from '../components/Grid';
import RuleDisplay from '../components/RuleDisplay';
import Hero from '../components/Hero';

const GAMEBOARD_MAX_WIDTH = 1100;
const GAMEBOARD_MAX_HEIGHT = 600;
const RULEDISPLAY_HEIGHT = 50;

class GameBoard extends React.Component {

  // On component mount, resize the game board to fit window
  componentWillMount() {
    window.addEventListener('resize', () => { this.resize(); });
    this.resize();
  }

  // Resize serves to always fit the game board in the window
  resize() {
    let width = document.body.clientWidth;
    let pw = 1 / (2 * this.props.boardSize.width);
    pw = width > GAMEBOARD_MAX_WIDTH ? pw * GAMEBOARD_MAX_WIDTH : pw * width;

    let ph = (GAMEBOARD_MAX_HEIGHT - RULEDISPLAY_HEIGHT) / (2 * this.props.boardSize.height);

    this.setState({
      width: width,
      partialW: pw,
      partialH: ph,
    });
  }

  render() {
    let style = {
      fontFamily: 'Oswald, Roboto, sans',
      width: this.state.width,
      height: GAMEBOARD_MAX_HEIGHT,
      maxWidth: GAMEBOARD_MAX_WIDTH,
      margin: '0 auto',
      display: 'flex',
      flexFlow: 'column nowrap',
      backgroundColor: 'rgb(153, 210, 158)',
    };

    const { boardSize, heroPosition } = this.props;
    const { width, height } = this.state;
    let position = {
      x: this.state.partialW * (2 * heroPosition.x + 1),
      y: this.state.partialH * (2 * heroPosition.y + 1)
    };

    return (
      <div style={style}>
        <RuleDisplay height={RULEDISPLAY_HEIGHT} />
        <Grid boardSize={boardSize} heroPosition={position} />
      </div>
    );
  }
}
GameBoard.propTypes = {
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

export default connect(select)(GameBoard);

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Grid from '../components/Grid';
import RuleDisplay from '../components/RuleDisplay';
import Hero from '../components/Hero';

const GAMEBOARD_MAX_WIDTH = 900;
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
    let W = Math.min(window.outerWidth * 0.9, GAMEBOARD_MAX_WIDTH),
    H = Math.min(window.outerHeight * 0.7, GAMEBOARD_MAX_HEIGHT);
    this.setState({
      width: W,
      height: H,
      partialW: W / (2 * this.props.boardSize.width),
      partialH: (H - RULEDISPLAY_HEIGHT) / (2 * this.props.boardSize.height),
    });
  }

  render() {
    let style = {
      width: this.state.width,
      height: this.state.height,
      backgroundColor: 'rgb(153, 210, 158)',
      position: 'fixed',
      top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    const { boardSize, heroPosition, values } = this.props;
    const { width, height } = this.state;
    let position = {
      x: this.state.partialW * (2 * heroPosition.x + 1),
      y: this.state.partialH * (2 * heroPosition.y + 1)
    };

    return (
      <div style={style}>
        <RuleDisplay rule={values.title} height={RULEDISPLAY_HEIGHT} />
        <Grid width={style.width} height={style.height - RULEDISPLAY_HEIGHT} boardSize={boardSize} heroPosition={position} options={values.options} />
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
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  }).isRequired
};

export default GameBoard;

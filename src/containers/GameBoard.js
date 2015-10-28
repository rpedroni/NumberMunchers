import React from 'react';
import ReactDOM from 'react-dom';

import Grid from '../components/Grid';
import RuleDisplay from '../components/RuleDisplay';
import Hero from '../components/Hero';

class GameBoard extends React.Component {

  // On component mount, resize the game board to fit window
  componentWillMount() {
    window.addEventListener('resize', () => { this.resize(); });
    this.resize();
  }

  // Resize serves to always fit the game board in the window
  resize() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    let style = {
      fontFamily: 'Oswald, Roboto, sans',
      width: this.state.width - 20,
      height: this.state.height,
      maxHeight: 600,
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      flexFlow: 'column nowrap',
      backgroundColor: 'rgb(153, 210, 158)',
    };
    return (
      <div style={style}>
        <RuleDisplay />
        <Hero position={[100,50]} />
        <Grid />
      </div>
    );
  }

}

export default GameBoard;

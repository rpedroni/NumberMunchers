import React from 'react';
import ReactDOM from 'react-dom';

import Grid from '../components/Grid';
import RuleDisplay from '../components/RuleDisplay';
import Hero from '../components/Hero';

class GameBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }

  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log(this.state.width);
    });
  }

  render() {
    let style = {
      fontFamily: 'Oswald, Roboto, sans',
      width: this.state.width,
      height: this.state.height,
      maxHeight: 600,
      maxWidth: 1100,
      margin: '0 auto',
      display: 'flex',
      flexFlow: 'column nowrap',
      backgroundColor: 'rgb(153, 210, 158)',
    };
    return (
      <div style={style}>
        <RuleDisplay />
          <Hero position={[100,50]} />
        <Grid>
        </Grid>
      </div>
    );

  }

}

export default GameBoard;

import React from 'react';
import { connect } from 'react-redux';

import { pushState } from 'redux-router';

class Home extends React.Component {

  startGame() {
    this.props.dispatch(pushState(null, '/game'));
  }

  render() {
    let style = {
      position: 'fixed',
      top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      button: {
        fontSize: 50,
        padding: '10px 20px',
        backgroundColor: 'rgb(119, 196, 124)',
        cursor: 'pointer',
      }
    };
    return (
      <div style={style}>
        <a
          style={style.button}
          onClick={this.startGame.bind(this)}>
          START GAME
        </a>
      </div>
    );
  }

}

export default connect()(Home);

import React from 'react';

import {Motion, spring} from 'react-motion';

class Hero extends React.Component {

  render() {
    const DIMENSION = 50;
    let style = {
      borderRadius: '50%',
      backgroundColor: 'rgb(58, 130, 54)',
      height: DIMENSION, width: DIMENSION,
      position: 'absolute',
      top: this.props.position[0],
      left: this.props.position[1]
    };

    return (
      // <Motion
      //   defaultStyle={{x: 0, y: 0}}
      //   style={{x: spring(150), y: spring(300)}}>
      //   {(value) => {
      //     style.left = value.x;
      //     style.top = value.y;
      //     return (<div style={style}>
      //       {value.x}
      //     </div>);
      //   }}
      // </Motion>
      <span style={style}></span>
    );

  }

}

export default Hero;

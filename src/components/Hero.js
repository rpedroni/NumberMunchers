import React, { PropTypes } from 'react';

class Hero extends React.Component {

  render() {
    const DIMENSION = 66;
    const HALF_D = DIMENSION / 2;
    let style = {
      borderRadius: '50%',
      backgroundColor: 'rgb(58, 130, 54)',
      height: DIMENSION, width: DIMENSION,
      position: 'absolute',
      left: this.props.position.x - HALF_D,
      top: this.props.position.y - HALF_D
    };

    return (
      <span style={style} />
    );
  }
}
Hero.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Hero;

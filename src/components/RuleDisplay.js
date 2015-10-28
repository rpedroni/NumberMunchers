import React, { PropTypes } from 'react';

class RuleDisplay extends React.Component {

  render() {
    let style = {
      height: this.props.height || 0,
      boxSizing: 'border-box',
      padding: 10,
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 30,
    };

    // TODO
    let rule = "Multiples of 5";
    return (
      <div style={style}>
        <span>{rule}</span>
      </div>
    );
  }
}
RuleDisplay.propTypes = {
  height: PropTypes.number
};

export default RuleDisplay;

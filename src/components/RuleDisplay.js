import React, { PropTypes } from 'react';

class RuleDisplay extends React.Component {

  render() {
    let style = {
      height: this.props.height,
      boxSizing: 'border-box',
      padding: 10,
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 30,
    };

    return (
      <div style={style}>
        <span>{this.props.rule}</span>
      </div>
    );
  }
}
RuleDisplay.propTypes = {
  rule: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
};

export default RuleDisplay;

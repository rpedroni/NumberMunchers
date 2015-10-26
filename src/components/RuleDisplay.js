import React from 'react';

class RuleDisplay extends React.Component {

  render() {
    let style = {
      padding: 10,
      textAlign: 'center', marginBottom: 10
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

export default RuleDisplay;

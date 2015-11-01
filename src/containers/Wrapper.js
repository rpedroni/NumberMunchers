import React from 'react';

export default class Wrapper extends React.Component {

  render() {
    let style = {
      fontFamily: 'Oswald, Roboto, sans'
    };
    return(
      <div style={style}>
        {this.props.children}
      </div>
    );
  }

}

import React from 'react';

class GridCell extends React.Component {

  render() {
    const BORDER = '4px solid rgb(70, 70, 70)';
    let style = {
      borderLeft: BORDER,
      borderTop: BORDER,
      boxSizing: 'border-box',
      textAlign: 'center',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      text: {
        fontSize: 40,
        color: 'rgb(50, 50, 50)',
        lineHeight: 40
      }
    };
    style.borderRight = this.props.isLastCol ? BORDER : '0';
    style.borderBottom = this.props.isLastRow ? BORDER : '0';

    return (
      <div style={Object.assign(style, this.props.style)}>
          <span style={style.text}>
            {this.props.value || String.fromCharCode(20)}
          </span>
      </div>
    );

  }

}

export default GridCell;

import React, { PropTypes } from 'react';

import GridCell from './GridCell';
import Hero from './Hero';

class Grid extends React.Component {

  render() {
    const { boardSize, options, width, height } = this.props;
    let style = {
      grid: {
        position: 'relative', // Used to maintain HERO inside of grid
        height: height,
        backgroundColor: '#eee',
      },
      cell: {
        width: width / boardSize.width,
        height: height / boardSize.height
      }
    };

    let gridCells = [];
    options.forEach((option, index) => {
      gridCells.push(
        <GridCell
          text={option.text}
          key={index}
          style={style.cell}
          isLastCol={(index + 1) % boardSize.width === 0}
          isLastRow={index + 1 > (boardSize.height - 1) * boardSize.width}
          />
      );
    });

    return (
      <div style={style.grid}>

        <Hero position={this.props.heroPosition} />

        {gridCells}

      </div>
    );
  }
}
Grid.propTypes = {
  boardSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  options: PropTypes.array.isRequired
};

export default Grid;

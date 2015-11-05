import React, { PropTypes } from 'react';

import GridCell from './GridCell';
import Hero from './Hero';

class Grid extends React.Component {

  render() {
    // Dimensions of grid
    let
    numColumns = this.props.boardSize.width,
    numRows = this.props.boardSize.height,
    values = this.props.values,
    width = this.props.width,
    height = this.props.height;

    let style = {
      grid: {
        position: 'relative', // Used to maintain HERO inside of grid
        height: height,
        backgroundColor: '#eee',
      },
      cell: {
        width: width / numColumns,
        height: height / numRows
      }
    };

    let gridCells = [];
    values.forEach((value, index) => {
      gridCells.push(
        <GridCell
          value={value}
          key={index}
          style={style.cell}
          isLastCol={(index + 1) % numColumns === 0}
          isLastRow={index + 1 > (numRows - 1) * numColumns}
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
  values: PropTypes.array.isRequired
};

export default Grid;

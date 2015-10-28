import React, { PropTypes } from 'react';

import GridCell from './GridCell';
import Hero from './Hero';

class Grid extends React.Component {

  render() {
    // Dimensions of grid
    let
    numColumns = this.props.boardSize.width,
    numRows = this.props.boardSize.height;

    let style = {
      grid: {
        position: 'relative', // Used to maintain HERO inside of grid
        display: 'flex',
        flexFlow: 'row wrap',
        backgroundColor: 'rgb(240, 240, 240)',
        flexGrow: 9
      },
      cell: {
        flex: `1 0 ${100/numColumns}%`,
      }
    };

    let gridCells = [];
    for (let i = 1; i <= numColumns * numRows; i++) {
      let index = i - 1;
      gridCells.push(
        <GridCell
          value={i}
          key={index}
          style={style.cell}
          isLastCol={i % numColumns === 0}
          isLastRow={i > (numRows - 1) * numColumns}
          />
      );
    }

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
  }).isRequired
};

export default Grid;

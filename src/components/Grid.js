import React from 'react';

import GridCell from './GridCell';

class Grid extends React.Component {

  render() {
    // TODO - get from props
    let numColumns = 6, numRows = 5;

    let style = {
      grid: {
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
        {gridCells}
      </div>
    );

  }

}

export default Grid;

import React from 'react';
import checkAdjacentColors from './lib/mapUtility';
import MapCell from './atom/MapCell';
import './App.css';
const colorMapper = {
  0: 'black',
  1: 'blue',
  2: 'green',
  3: 'red',
  4: 'orange',
  5: 'purple',
  6: 'lime',
  7: 'yellow',
  8: 'brown',
};

// const map = [
//   [6, 6, 3, 3, 7, 7, 7, 7],
//   [6, 6, 3, 3, 7, 1, 1, 7],
//   [3, 3, 4, 4, 4, 1, 1, 5],
//   [3, 3, 0, 0, 4, 4, 5, 5],
//   [7, 7, 0, 8, 8, 4, 2, 2],
//   [7, 6, 6, 8, 8, 4, 2, 2],
//   [7, 6, 6, 7, 2, 2, 2, 2],
//   [7, 7, 7, 7, 2, 2, 2, 2],
// ];

const map = [
  [3, 3, 3],
  [3, 1, 1],
  [4, 4, 4],
];

const App = () => {
  const cellSize = 600 / map.length; // Calculate size of each MapCell

  return (
    <div className="container" style={{ width: '600px', height: '600px' }}>
      {map.map((row, rowIndex) => (
        <div key={rowIndex} className="row" style={{ display: 'flex' }}>
          {row.map((number, colIndex) => {
            const color = colorMapper[number];
            const adjacentColor = checkAdjacentColors(map, rowIndex, colIndex);

            return (
              <MapCell
                key={`${rowIndex}-${colIndex}`}
                color={color}
                size={cellSize}
                hasDifferentAdjacent={adjacentColor}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default App;

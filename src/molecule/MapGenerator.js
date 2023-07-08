import React from 'react';
import { checkAdjacentColors } from '../lib/mapUtility';
import MapCell from '../atom/MapCell';
import '../App.css';
import { colorMapper } from '../constants';

const MapGenerator = ({ map, width, height }) => {
  const mapLength = map.length;
  const cellSize = 600 / mapLength;

  const gridTemplate = {
    gridTemplateColumns: `repeat(${mapLength}, 1fr)`,
    gridTemplateRows: `repeat(${mapLength}, 1fr)`,
  }

  return (
    <div className="container" style={{ width: width, height: height, ...gridTemplate }}>
      {map.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
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

export default MapGenerator;

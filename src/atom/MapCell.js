import React from 'react';

const MapCell = ({ color, size, hasDifferentAdjacent }) => {
  return (
    <div
      className="map-cell"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        borderTop: hasDifferentAdjacent.top ? '1.5px solid black' : `none`,
        borderBottom: hasDifferentAdjacent.bottom ? '1.5px solid black' : `none`,
        borderLeft: hasDifferentAdjacent.left ? '1.5px solid black' : `none`,
        borderRight: hasDifferentAdjacent.right ? '1.5px solid black' : `none`,
      }}
    ></div>
  );
};

export default MapCell;

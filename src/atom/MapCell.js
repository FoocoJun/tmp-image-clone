import React from 'react';

const MapCell = ({ color, size, hasDifferentAdjacent }) => {
  console.log(hasDifferentAdjacent);
  return (
    <div
      className="map-cell"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        borderTop: hasDifferentAdjacent.top ? '2px solid black' : `none`,
        borderBottom: hasDifferentAdjacent.bottom ? '2px solid black' : `none`,
        borderLeft: hasDifferentAdjacent.left ? '2px solid black' : `none`,
        borderRight: hasDifferentAdjacent.right ? '2px solid black' : `none`,
      }}
    ></div>
  );
};

export default MapCell;

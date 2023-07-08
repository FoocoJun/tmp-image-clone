const checkAdjacentColors = (map, row, col) => {
  const directions = {
    top: { row: -1, col: 0 },
    bottom: { row: 1, col: 0 },
    left: { row: 0, col: -1 },
    right: { row: 0, col: 1 },
  };

  const color = map[row][col];
  const adjacentColors = {};

  for (const direction in directions) {
    const { row: rowOffset, col: colOffset } = directions[direction];
    const adjacentRow = row + rowOffset;
    const adjacentCol = col + colOffset;

    if (
      adjacentRow >= 0 &&
      adjacentRow < map.length &&
      adjacentCol >= 0 &&
      adjacentCol < map[adjacentRow].length
    ) {
      const adjacentColor = map[adjacentRow][adjacentCol];
      adjacentColors[direction] = adjacentColor !== color;
    } else {
      adjacentColors[direction] = false;
    }
  }

  return adjacentColors;
};

export default checkAdjacentColors;

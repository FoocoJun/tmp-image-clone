export const transposeMap = (map) => {
  const transposedMap = [];

  map[0].forEach((_, col) => {
    const transposedRow = map.map((row) => row[col]);
    transposedMap.push(transposedRow);
  });

  return transposedMap;
};

/** 인접한 색을 확인합니다.
 * 주어진 방향의 인접한 Cell의 색상이 다르다면 true를 반환합니다.
 * 또, 주어진 방향에 인접한 셀이 없다면(배열의 끝이라면) true를 반환합니다.
 * true는 추후 MapCell에서 검은색 경계선으로 치환됩니다.
 */ 
export const checkAdjacentColors = (map, row, col) => {
  const directions = {
    left: { row: -1, col: 0 },
    right: { row: 1, col: 0 },
    top: { row: 0, col: -1 },
    bottom: { row: 0, col: 1 },
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
      adjacentColors[direction] = true;
    }
  }

  return adjacentColors;
};

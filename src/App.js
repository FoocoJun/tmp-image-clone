import React from 'react';
import { transposeMap, createRandomMap } from './lib/mapUtility';
import './App.css';
import MapGenerator from './molecule/MapGenerator';

let map = [
  [6, 6, 3, 3, 7, 7, 7, 7],
  [6, 6, 3, 3, 7, 1, 1, 7],
  [3, 3, 4, 4, 4, 1, 1, 5],
  [3, 3, 0, 0, 4, 4, 5, 5],
  [7, 7, 0, 8, 8, 4, 2, 2],
  [7, 6, 6, 8, 8, 4, 2, 2],
  [7, 6, 6, 7, 2, 2, 2, 2],
  [7, 7, 7, 7, 2, 2, 2, 2],
];

map = transposeMap(map);

// 주어진 과제 조건
const mapOptions = {
  map,
  width: 600,
  height: 600,
}


const App = () => {
  const [map, setMap] = React.useState(mapOptions.map);
  const [width, setWidth] = React.useState(mapOptions.width);
  const [height, setHeight] = React.useState(mapOptions.height);

  const handleClickResetBtn = () => {
    const randomMap = createRandomMap(8);
    setMap(transposeMap(randomMap))
  }

  return (
    <div className="App">
      <MapGenerator map={map} width={width} height={height} ></MapGenerator>
      <br/>
      <button onClick={handleClickResetBtn}>랜덤 이미지 만들기</button>
    </div>
  );
};

export default App;

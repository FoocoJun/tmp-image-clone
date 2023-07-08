import React from 'react';
import { transposeMap } from './lib/mapUtility';
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

const App = () => {
  return (
    <div className="App">
      <MapGenerator map={map} width={600} height={600} ></MapGenerator>
    </div>
  );
};

export default App;

import React from "react";

import { getUSData, getFloridaData, getDuvalData } from "./api/datacollection";
import UnitedStates from "./body/UnitedStates";
import Header from "./header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <UnitedStates />

      <h1 onClick={getUSData}>check US</h1>
      <h1 onClick={getFloridaData}>check Florida</h1>
      <h1 onClick={getDuvalData}>check duval</h1>
    </div>
  );
}

export default App;

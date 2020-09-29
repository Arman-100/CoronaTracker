import React, { useEffect, useState } from "react";
import {
  getUSDataConfirmed,
  getUSDataDead,
  getUSDataRecovered,
} from "../api/datacollection";
import USMap from "../image/download.png";
import "./UnitedStates.scss";

function UnitedStates() {
  const [confirmed, setconfirmed] = useState("0");
  const [dead, setDead] = useState("0");
  const [recovered, setRecovered] = useState("0");
  useEffect(() => {
    getUSDataConfirmed().then(setconfirmed);
    getUSDataDead().then(setDead);
    getUSDataRecovered().then(setRecovered);
  }, []);
  return (
    <div className="usContainer">
      <div className="usmap">
        <img src={USMap} alt="" />
        <div className="info">
          <p className="status confirmed">Confirmed: {confirmed}</p>
          <p className="status dead">Dead: {dead}</p>
          <p className="status recovered">Recovered: {recovered}</p>
        </div>
      </div>
    </div>
  );
}

export default UnitedStates;

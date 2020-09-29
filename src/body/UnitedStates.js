import React, { useEffect, useState } from "react";
import {
  getUSDataConfirmed,
  getUSDataDead,
  getUSDataRecovered,
} from "../api/datacollection";
import USMap from "../image/download.png";
import "./UnitedStates.scss";
import DropDown from "./dropdown";

function UnitedStates() {
  const [confirmed, setconfirmed] = useState("0");
  const [dead, setDead] = useState("0");
  const [recovered, setRecovered] = useState("0");
  useEffect(() => {
    getUSDataConfirmed().then(setconfirmed);
    getUSDataDead().then(setDead);
    getUSDataRecovered().then(setRecovered);
  }, []);

  const deathCount911 = 2977;
  const polioDeathCount = 3145;
  const swineFluDeathCount = 12469;
  const choleraDeathCount = 12000;

  return (
    <div className="usContainer">
      <div className="usmap">
        <img src={USMap} alt="" />
        <div className="info">
          <DropDown />
          <p className="status confirmed">
            Confirmed: <br />
            {confirmed}
          </p>
          <p className="status dead">
            Dead: <br />
            {dead}
          </p>
          <p className="status recovered">
            Recovered: <br />
            {recovered}
          </p>
        </div>
      </div>
      <div className="facts">
        <h1 className="factsTitle">Relative Severity Facts</h1>
        <ul>
          <li>
            The death count of CoronaVirus is more than{" "}
            {parseInt(dead / deathCount911)} Septermber 11 deaths.
          </li>
          <li>
            The death count of CoronaVirus is more than{" "}
            {parseInt(dead / polioDeathCount)} times the number of people who
            suffered and died painfully from Polio.
          </li>
          <li>
            The death count of CoronaVirus is more than{" "}
            {parseInt(dead / swineFluDeathCount)} times the number of people who
            died from swine flu (H1N1).
          </li>
          <li>
            The death count of CoronaVirus is more than{" "}
            {parseInt(dead / choleraDeathCount)} times the people who died to
            cholera.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UnitedStates;

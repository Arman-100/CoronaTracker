import React, { useEffect, useState } from "react";
import {
  getUSDataConfirmed,
  getUSDataDead,
  getUSDataRecovered,
} from "../api/datacollection";
import USMap from "../image/download.png";
import "./UnitedStates.scss";
import CoronaPic from "../image/coronaimage.jpg";

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
      <div className="topArea">
        <img src={CoronaPic} className="coronaPic" alt="" />
      </div>
      <div className="usmap">
        <img src={USMap} className="usPicture" alt="" />
        <div className="infoUs">
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
            {parseInt(dead / deathCount911)} September 11 deaths.
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
      <div class="container">
        <div class="usCard">
          <h3 class="title">9/11</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle"></div>
        </div>
        <div class="usCard">
          <h3 class="title">Polio</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            Covid-19 has killed mor than {parseInt(dead / deathCount911)}
          </div>
        </div>
        <div class="usCard">
          <h3 class="title">Swine Flu</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle"></div>
        </div>
        <div class="usCard">
          <h3 class="title">Cholera</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default UnitedStates;

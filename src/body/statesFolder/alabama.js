import React, { useState, useEffect } from "react";

import {
  getStateDataConfirmed,
  getStateDataDead,
} from "../../api/datacollection";
import { dataOrganize } from "../countyfolder/dataOrganize";
import "../countyfolder/countyCard.scss";
const stateName = "Alabama";

function Alabama() {
  const [counties, setCounties] = useState([]);
  const [confirmed, setConfirmed] = useState("0");
  const [dead, setDead] = useState("0");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useeffect called");
    dataOrganize(stateName)
      .then((response) => {
        setCounties(response);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    getStateDataConfirmed(stateName).then(setConfirmed);
    getStateDataDead(stateName).then(setDead);
  }, []);

  if (load) {
    return (
      <div>
        <div className="stateContainer">
          <div className="stateTitle">{stateName}</div>

          <div className="info">
            <p className="status confirmed">
              Confirmed: {!confirmed ? "Information not available" : confirmed}
            </p>
            <p className="status dead">
              Dead: {!dead ? "Information not available" : dead}
            </p>
          </div>
        </div>
        <p className="worstCase">
          In 2011, the super outbreak of tornadoes hit Alabama. With more than
          362 confirmed tornadoes, an estimated 321 people lost there lives.
          Covid-19 has killed more than {Math.floor(dead / 321)} times the
          number of people in the State of Alabama.
        </p>
        <div className="countycontainer">
          {error ? (
            <h1>{error.message}</h1>
          ) : (
            counties
              .sort((a, b) => {
                let nameA = a.location.toUpperCase();
                let nameB = b.location.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              })
              .map(function (county, index) {
                if (
                  county.location.split(", ")[1] === stateName &&
                  county.location.split(" ")[0] !== "Unassigned" &&
                  county.location.split(" ")[0] !== "Out"
                ) {
                  return (
                    <div className="card" key={index}>
                      <h3>{county.location.split(",")[0]}</h3>
                      <p>confirmed: {county.confirmed}</p>
                      <p>dead: {county.dead}</p>
                    </div>
                  );
                } else {
                  return null;
                }
              })
          )}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default Alabama;

import React, { useState, useEffect } from "react";
import DropDown from "../dropdown";
import {
  getStateDataConfirmed,
  getStateDataDead,
} from "../../api/datacollection";

function Vermont() {
  const [confirmed, setConfirmed] = useState("0");
  const [dead, setDead] = useState("0");

  useEffect(() => {
    getStateDataConfirmed("Vermont").then(setConfirmed);
    getStateDataDead("Vermont").then(setDead);
  }, []);
  return (
    <div>
      <div className="stateContainer">
        <div className="info">
          <DropDown />
          <p className="status confirmed">
            Confirmed: <br />
            {!confirmed ? "Information not available" : confirmed}
          </p>
          <p className="status dead">
            Dead: <br />
            {!dead ? "Information not available" : dead}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vermont;

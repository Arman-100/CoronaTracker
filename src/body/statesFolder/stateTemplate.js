import React from "react";
import DropDown from "../dropdown";

function StateTemplate(props) {
  return (
    <div className="stateContainer">
      <div className="info">
        <DropDown />
        <p className="status confirmed">
          Confirmed: <br />
          {props.confirmed}
        </p>
        <p className="status dead">
          Dead: <br />
          {props.dead}
        </p>
        <p className="status recovered">
          Recovered: <br />
          {props.recovered}
        </p>
      </div>
    </div>
  );
}

export default StateTemplate;

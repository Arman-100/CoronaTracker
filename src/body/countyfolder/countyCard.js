import React from "react";
import "./countyCard.scss";

function CountyCard(props) {
  return (
    <div className="container center">
      <div className="card">
        <h2>Location: {props.location}</h2>
        <p>confirmed: {props.confirmed}</p>
        <p>dead: {props.dead}</p>
      </div>
    </div>
  );
}

export default CountyCard;

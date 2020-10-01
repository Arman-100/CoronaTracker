import React from "react";

const usStates = [
  { name: "UNITED STATES", abbreviation: "US" },
  { name: "ALABAMA", abbreviation: "AL" },
  { name: "ALASKA", abbreviation: "AK" },
  { name: "ARIZONA", abbreviation: "AZ" },
  { name: "ARKANSAS", abbreviation: "AR" },
  { name: "CALIFORNIA", abbreviation: "CA" },
  { name: "COLORADO", abbreviation: "CO" },
  { name: "CONNECTICUT", abbreviation: "CT" },
  { name: "DELAWARE", abbreviation: "DE" },
  { name: "DISTRICT OF COLUMBIA", abbreviation: "DC" },
  { name: "FLORIDA", abbreviation: "FL" },
  { name: "GEORGIA", abbreviation: "GA" },
  { name: "HAWAII", abbreviation: "HI" },
  { name: "IDAHO", abbreviation: "ID" },
  { name: "ILLINOIS", abbreviation: "IL" },
  { name: "INDIANA", abbreviation: "IN" },
  { name: "IOWA", abbreviation: "IA" },
  { name: "KANSAS", abbreviation: "KS" },
  { name: "KENTUCKY", abbreviation: "KY" },
  { name: "LOUISIANA", abbreviation: "LA" },
  { name: "MAINE", abbreviation: "ME" },
  { name: "MARYLAND", abbreviation: "MD" },
  { name: "MASSACHUSETTS", abbreviation: "MA" },
  { name: "MICHIGAN", abbreviation: "MI" },
  { name: "MINNESOTA", abbreviation: "MN" },
  { name: "MISSISSIPPI", abbreviation: "MS" },
  { name: "MISSOURI", abbreviation: "MO" },
  { name: "MONTANA", abbreviation: "MT" },
  { name: "NEBRASKA", abbreviation: "NE" },
  { name: "NEVADA", abbreviation: "NV" },
  { name: "NEW HAMPSHIRE", abbreviation: "NH" },
  { name: "NEW JERSEY", abbreviation: "NJ" },
  { name: "NEW MEXICO", abbreviation: "NM" },
  { name: "NEW YORK", abbreviation: "NY" },
  { name: "NORTH CAROLINA", abbreviation: "NC" },
  { name: "NORTH DAKOTA", abbreviation: "ND" },
  { name: "OHIO", abbreviation: "OH" },
  { name: "OKLAHOMA", abbreviation: "OK" },
  { name: "OREGON", abbreviation: "OR" },
  { name: "PENNSYLVANIA", abbreviation: "PA" },
  { name: "RHODE ISLAND", abbreviation: "RI" },
  { name: "SOUTH CAROLINA", abbreviation: "SC" },
  { name: "SOUTH DAKOTA", abbreviation: "SD" },
  { name: "TENNESSEE", abbreviation: "TN" },
  { name: "TEXAS", abbreviation: "TX" },
  { name: "UTAH", abbreviation: "UT" },
  { name: "VERMONT", abbreviation: "VT" },
  { name: "VIRGINIA", abbreviation: "VA" },
  { name: "WASHINGTON", abbreviation: "WA" },
  { name: "WEST VIRGINIA", abbreviation: "WV" },
  { name: "WISCONSIN", abbreviation: "WI" },
  { name: "WYOMING", abbreviation: "WY" },
];

function goToSite() {
  window.location = document.getElementById("selectDropdown").value;
}

function DropDown() {
  return (
    <div className="select">
      <select className="selectDropdown" id="selectDropdown">
        {usStates.map((state) => {
          return (
            <option
              key={state.abbreviation}
              value={`http://localhost:3000/${state.name.split(" ").join("")}`}
            >
              {state.name}
            </option>
          );
        })}
      </select>
      <button onClick={goToSite}>Go</button>
    </div>
  );
}

export default DropDown;

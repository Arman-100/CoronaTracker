import React from "react";
import "./Header.scss";
import DropDown from "../body/dropdown";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <p className="title">The Corona Times</p>
        <DropDown />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.scss";
import DropDown from "../body/dropdown";

function Header() {
  return (
    <div className="navBarContainer">
      <div className="navbar">
        <a className="logo" href={Window}>
          {" "}
          The Corona Times
        </a>

        <DropDown />
      </div>
    </div>
  );
}

export default Header;

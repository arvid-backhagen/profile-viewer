import React from "react";
import logo from "../Assets/logo.svg";
import { TiThMenu } from "react-icons/ti";

function Header(props) {
  return (
    <header className="Header">
      <img src={logo} className="App-logo" alt="logo" />

      <div>Profiles</div>
      <TiThMenu className="hamburger" onClick={props.toggleFilters} />
    </header>
  );
}

export default Header;

import React from "react";
import logo from "../Assets/logo.svg";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>Header</div>
    </header>
  );
}

export default Header;

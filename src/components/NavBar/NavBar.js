import React, { Component } from "react";
import "./styles.scss";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="container">
          <nav className="nav">
            <Logo />
            <NavLinks />
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;

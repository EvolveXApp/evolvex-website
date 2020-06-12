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

            <div className="nav_icon" data-state="showing">
              <div className="nav_icon_lines nav_icon_topline"></div>
              <div className="nav_icon_lines nav_icon_midline"></div>
              <div className="nav_icon_lines nav_icon_bottomline"></div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;

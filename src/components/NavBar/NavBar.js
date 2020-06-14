import React, { Component } from "react";
import styles from "./styles.module.scss";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import NavIcon from "../NavIcon";
import NavSideBar from "../NavSideBar/NavSideBar";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.nav_container}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Logo />
            <NavLinks />
            <NavIcon />
          </nav>
        </div>
        <NavSideBar />
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import styles from "./styles.module.scss";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import NavIcon from "../NavIcon";
import NavSideBar from "../NavSideBar/NavSideBar";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false };
  }

  iconClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <NavSideBar />;
    }
    return (
      <div className={styles.nav_container}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Logo />
            <NavLinks />
            <NavIcon
              sideDrawerOpen={this.state.sideDrawerOpen}
              iconClickHandler={this.iconClickHandler}
            />
          </nav>
        </div>
        {sideDrawer}
      </div>
    );
  }
}

export default NavBar;

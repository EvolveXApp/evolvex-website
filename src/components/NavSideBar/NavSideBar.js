import React from "react";
import styles from "./styles.module.scss";
import { ActiveNavBarLink } from "../NavBar/NavBarLink";

const NavSideBar = () => {
  return (
    <div className={styles.container} id="navSideBarContainer">
      <ActiveNavBarLink className={styles.mainNavLink} to="/" title="Home" />
      <div className={styles.aboutContainer}>
        <ActiveNavBarLink className={styles.mainNavLink} title="About" />
        <ActiveNavBarLink
          className={styles.subNavLink}
          to="/ProgramOverview"
          title="Program Overview"
        />
        <ActiveNavBarLink
          className={styles.subNavLink}
          to="/Team"
          title="Our Team"
        />
      </div>
      <ActiveNavBarLink
        className={styles.mainNavLink}
        to="/Resources"
        title="Resources"
      />
      <ActiveNavBarLink
        className={styles.mainNavLink}
        to="/Contact"
        title="Contact"
      />
    </div>
  );
};

export default NavSideBar;

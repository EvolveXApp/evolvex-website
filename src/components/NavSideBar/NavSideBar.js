import React from "react";
import styles from "./styles.module.scss";
import { ActiveNavBarLink } from "../NavBar/NavBarLink";

export default function NavSideBar({}) {
  return (
    <div className={styles.container} id="navSideBarContainer">
      <ActiveNavBarLink
        className={styles.mainNavLink}
        exact
        to="/"
        title="Home"
      />
      <div className={styles.aboutContainer}>
        <ActiveNavBarLink className={styles.mainNavLink} title="About" />
        <ActiveNavBarLink
          className={styles.subNavLink}
          exact
          to="/ProgramOverview"
          title="Program Overview"
        />
        <ActiveNavBarLink
          className={styles.subNavLink}
          exact
          to="/Team"
          title="Our Team"
        />
      </div>
      <ActiveNavBarLink
        className={styles.mainNavLink}
        exact
        to="/Resources"
        title="Resources"
      />
      <ActiveNavBarLink
        className={styles.mainNavLink}
        exact
        to="/Contact"
        title="Contact"
      />
    </div>
  );
}

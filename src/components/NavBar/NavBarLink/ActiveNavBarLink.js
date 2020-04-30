import React from "react";
import { NavBarLink } from "./NavBarLink";
import styles from "./NavBarLink.module.scss";

export function ActiveNavBarLink({ to, title, ...props }) {
  return (
    <NavBarLink
      className={`${styles.navLink} ${styles.activeNavLink}`}
      to={to}
      title={title}
      activeStyle={{ borderColor: "#EEB91F" }}
      {...props}
    />
  );
}

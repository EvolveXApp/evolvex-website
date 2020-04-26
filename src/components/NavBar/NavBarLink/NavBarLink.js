import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarLink.module.scss";

export function NavBarLink({ to, title, ...props }) {
  return (
    <NavLink exact className={styles.navLink} to={to} {...props}>
      {title}
    </NavLink>
  );
}

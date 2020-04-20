import React from "react";
import { NavLink as ActiveLink } from "react-router-dom";
import styles from "./NavLink.module.scss";

export function NavLink({ to, title, ...props }) {
  return (
    <ActiveLink exact className={styles.navLink} to={to} {...props}>
      {title}
    </ActiveLink>
  );
}

import React from "react";
import { NavBarLink } from "../NavBarLink";
import styles from "./NavLinkDropdown.module.scss";
import dropdownArrow from "../../../assets/icons/white-arrow.png";

export default function NavLinkDropdown({ title, links }) {
  return (
    <div className={`${styles.navLink} ${styles.dropdown}`}>
      <div className={styles.dropdownTitle}>
        <div className={`${styles.navLink} `}>{title}</div>
        <img
          src={dropdownArrow}
          class={styles.dropdownArrow}
          alt="dropdownarrow"
        />
      </div>
      <div className={styles.dropdownContent}>
        {links.map((link) => (
          <NavBarLink key={link.to} title={link.title} to={link.to} />
        ))}
      </div>
    </div>
  );
}

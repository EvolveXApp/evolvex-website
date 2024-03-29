import React from "react";
import { NavBarLink, ActiveNavBarLink } from "../NavBarLink";
import styles from "./NavLinkDropdown.module.scss";
import dropdownArrow from "../../../assets/icons/white-arrow.png";

export default function NavLinkDropdown({ title, to, links }) {
  const isActive = ({ location }) => {
    return links.some((link) => link.to === location.pathname)
      ? { className: "activeNavLink" }
      : {};
  };
  return (
    <div className={`${styles.navLink} ${styles.dropdown}`}>
      <div className={styles.dropdownTitle}>
        <ActiveNavBarLink
          title={title}
          to={to}
          onClick={(event) => event.preventDefault()}
          getProps={isActive}
        />
        <img
          src={dropdownArrow}
          className={styles.dropdownArrow}
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

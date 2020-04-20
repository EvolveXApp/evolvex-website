import React from "react";
import { ActiveNavLink } from "../NavLink";
import NavLinkDropdown from "../NavLinkDropdown";
import styles from "./NavLinks.module.scss";

export default function NavLinks() {
  return (
    <div className={styles.navLinksContainer}>
      <ActiveNavLink to="/" title="Home" />
      <NavLinkDropdown
        title="About"
        links={[
          { to: "/programoverview", title: "Program Overview" },
          { to: "/team", title: "Our Team" },
        ]}
      />
      <ActiveNavLink to="/resources" title="Resources" />
      <ActiveNavLink to="/contact" title="Contact" />
    </div>
  );
}

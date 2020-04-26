import React from "react";
import { ActiveNavBarLink } from "../NavBarLink";
import NavLinkDropdown from "../NavLinkDropdown";
import styles from "./NavLinks.module.scss";

export default function NavLinks() {
  return (
    <div className={styles.navLinksContainer}>
      <ActiveNavBarLink to="/" title="Home" />
      <NavLinkDropdown
        title="About"
        links={[
          { to: "/programoverview", title: "Program Overview" },
          { to: "/team", title: "Our Team" },
        ]}
      />
      <ActiveNavBarLink to="/resources" title="Resources" />
      <ActiveNavBarLink to="/contact" title="Contact" />
    </div>
  );
}

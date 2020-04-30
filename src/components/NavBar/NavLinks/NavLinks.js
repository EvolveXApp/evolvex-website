import React from "react";
import { ActiveNavBarLink } from "../NavBarLink";
import NavLinkDropdown from "../NavLinkDropdown";
import styles from "./NavLinks.module.scss";

export default function NavLinks() {
  return (
    <div className={styles.navLinksContainer}>
      <ActiveNavBarLink exact to="/" title="Home" />
      <NavLinkDropdown
        title="About"
        to="/about"
        links={[
          { to: "/programoverview", title: "Program Overview" },
          { to: "/team", title: "Our Team" },
        ]}
      />
      <ActiveNavBarLink exact to="/resources" title="Resources" />
      <ActiveNavBarLink exact to="/contact" title="Contact" />
    </div>
  );
}

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
        to="/About"
        links={[
          { to: "/ProgramOverview", title: "Program Overview" },
          { to: "/Team", title: "Our Team" },
        ]}
      />
      <ActiveNavBarLink exact to="/Resources" title="Resources" />
      <ActiveNavBarLink exact to="/Contact" title="Contact" />
    </div>
  );
}

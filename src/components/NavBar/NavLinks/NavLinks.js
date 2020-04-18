import React from "react";
import NavLink from "../NavLink";
import NavLinkDropdown from "../NavLinkDropdown";
import "./styles.scss";

export default function NavLinks() {
  return (
    <div className="nav-links">
      <NavLink to="/" title="Home" />
      <NavLinkDropdown
        title="About"
        links={[
          { to: "/programoverview", title: "Program Overview" },
          { to: "/team", title: "Team" },
        ]}
      />
      <NavLink to="/resources" title="Resources" />
      <NavLink to="/contact" title="Contact" />
    </div>
  );
}

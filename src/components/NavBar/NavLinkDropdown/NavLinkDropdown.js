import React from "react";
import NavLink from "../NavLink";
import "./styles.scss";

export default function NavLinkDropdown({ title, links }) {
  return (
    <div className="nav-link nav-link-dropdown">
      <div className="nav-link">{title}</div>
      <div className="nav-link-dropdown-content">
        {links.map((link) => (
          <NavLink key={link.to} title={link.title} to={link.to} />
        ))}
      </div>
    </div>
  );
}

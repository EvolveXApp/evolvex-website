import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default function NavLink({ to, title }) {
  return (
    <Link className="nav-link" to={to}>
      {title}
    </Link>
  );
}

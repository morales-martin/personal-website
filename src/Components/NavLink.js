import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavLink({ setOpen, routeLink="/", className="nav-link", route }) {
  const updateOpen = useCallback(
    (event) => {
      setOpen(false);
    },
    [setOpen]
  );
  
  return (
    <Link
      to={routeLink}
      className={className}
      onClick={() => updateOpen}
    >
      {route}
    </Link>
  );
}

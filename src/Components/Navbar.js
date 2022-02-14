import {React, useState} from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      NavLink
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <NavLink route="Home" setOpen={setOpen} />
        </li>
        <li className="nav-item">
          <NavLink route="About" routeLink="/about" updateOpen={setOpen} />
        </li>
        <li className="nav-item">
        <NavLink route="Contact" routeLink="/contact" updateOpen={setOpen} />
        </li>
        <li className="nav-item">
        <NavLink route="Gallery" routeLink="/gallery" updateOpen={setOpen} />
        </li>
      </ul>
      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;

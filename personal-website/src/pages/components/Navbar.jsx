import React from "react";
import styles from "./Navbar.module.css";

function Navbar({ clickHandler }) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.lineBottomSpace}></div>
      </div>
      <div onClick={clickHandler} className={styles.navbarLink}>
        <a className="navLink" href="#home">
          Home
        </a>
      </div>
      <div onClick={clickHandler} className={styles.navbarLink}>
        <a className="navLink" href="#about">
          About Me
        </a>
      </div>
      <div onClick={clickHandler} className={styles.navbarLink}>
        <a className="navLink" href="#projects">
          Projects
        </a>
      </div>
      <div onClick={clickHandler} className={styles.navbarLink}>
        <a className="navLink" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;

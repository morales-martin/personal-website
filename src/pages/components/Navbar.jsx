import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ThemeChooser from "./ThemeChooser";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`${styles.mobileWrapper} ${
        open ? styles.open : styles.closed
      }`}
    >
      <div className={styles.mobileContainer} onClick={() => setOpen(!open)}>
        <a className={`navLink ${styles.mobileNavLink}`} href="#home">
          Home
        </a>
        <a className={`navLink ${styles.mobileNavLink}`} href="#about">
          About
        </a>
        <a className={`navLink ${styles.mobileNavLink}`} href="#contact">
          Contact
        </a>
        <a className={`navLink ${styles.mobileNavLink}`} href="#projects">
          Projects
        </a>
        <ThemeChooser />
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <MobileNav open={open} setOpen={setOpen} />
        <div className={styles.navWrapper}>
          <div
            className={styles.navContainer}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`${styles.hamburgerBuns} ${
                open ? styles.rotateDown : ""
              }`}
            />
            <span
              className={`${styles.hamburgerMeat} ${
                open ? styles.zeroWidth : styles.fullWidth
              }`}
            />
            <span
              className={`${styles.hamburgerBuns} ${
                open ? styles.rotateUp : ""
              }`}
            />
          </div>
        </div>
      </nav>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLink}>
          <a className="navLink" href="#projects">
            Projects
          </a>
        </div>
        <div className={styles.navbarLink}>
          <a className="navLink" href="#contact">
            Contact
          </a>
        </div>
        <div className={styles.navbarLink}>
          <a className="navLink" href="#about">
            About
          </a>
        </div>
        <div className={styles.navbarLink}>
          <a className="navLink" href="#home">
            Home
          </a>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
          <div className={styles.lineBottomSpace}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

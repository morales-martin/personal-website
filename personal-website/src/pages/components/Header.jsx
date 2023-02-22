import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.lineBottomSpace}></div>
      </div>
      <div className={styles.content}>
        <a href="mailto:morales-martin@outlook.com?subject=Hello from a visitor!">
          morales-martin@outlook.com
        </a>
      </div>
    </div>
  );
}

export default Header;

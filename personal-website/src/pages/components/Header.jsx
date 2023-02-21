import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.lineBottomSpace}></div>
      </div>
      <div className={styles.content}>morales-martin@outlook.com</div>
    </div>
  );
}

export default Header;

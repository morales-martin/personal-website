import React from "react";
import styles from "./Footer.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socialIcon}><GitHubIcon /></div>
        <div className={styles.socialIcon}><LinkedInIcon /></div>
        <div className={styles.socialIcon}><InstagramIcon /></div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.lineBottomSpace}></div>
      </div>
    </div>
  );
}

export default Footer;

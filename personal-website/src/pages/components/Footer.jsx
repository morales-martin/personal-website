import React from "react";
import styles from "./Footer.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a
          href="mailto:morales-martin@outlook.com?subject=Hello from a website visitor!"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <EmailIcon />
        </a>
        <a
          href="https://github.com/morales-martin"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/morales-martin24/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/moramart_/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
        >
          <InstagramIcon />
        </a>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.lineBottomSpace}></div>
      </div>
    </div>
  );
}

export default Footer;

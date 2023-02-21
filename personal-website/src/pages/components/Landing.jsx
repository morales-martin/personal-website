import React from "react";
import styles from "./Landing.module.css";

import Button from "../UI/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Landing({ className }) {
  return (
    <div className={`${className} ${styles.landingContainer}`}>
      <div className={styles.content}>
        <div className={styles.header}>Hi. I'm Martin</div>
        <div className={styles.titles}>Full Stack Software Engineer</div>
        <div className={styles.summary}>
          I’m a software engineer specializing in building exceptional digital
          products. Currently, I’m looking to contribute towards building
          accessible, sustainable human-centered products with a new team.
        </div>
        <div className={styles.resumeButton}>
          <Button text={"Check out my resume"} />
        </div>
      </div>
      <div className={styles.arrow}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Landing;

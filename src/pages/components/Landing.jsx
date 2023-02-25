import React from "react";
import styles from "./Landing.module.css";

import Button from "../UI/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AnimatedTypeText from "../UI/AnimatedTypeText";

function Landing({ className }) {
  return (
    <div id="home" className={`${className} ${styles.landingContainer}`}>
      <div className={styles.content}>
        <div className={styles.header}>{`Hi. I'm Martin`}</div>
        <div className={styles.titles}>
          <AnimatedTypeText
            sequence={[
              "Full Stack Software Engineer",
              1000,
              "UI Designer",
              1000,
              "Consultant",
              1000,
              "Web Developer",
              1000,
            ]}
          />
        </div>
        {/* <div className={styles.titles}>Full Stack Software Engineer</div> */}
        <div className={styles.summary}>
          {`I’m a software engineer specializing in building exceptional digital
          products. Currently, I’m looking to contribute towards building
          accessible, sustainable human-centered products with a new team.`}
        </div>
        <div className={styles.resumeButton}>
          <Button
            text={"Check out my resume"}
            href="/Martin Morales - Software Engineering Resume 2023.pdf"
            download={true}
          />
        </div>
      </div>
      <div className={styles.arrow}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Landing;

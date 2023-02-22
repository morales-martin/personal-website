import React from "react";
import Image from "next/image";
import styles from "./Project.module.css";

function Project({
  projectTitle,
  roles,
  description,
  chips = [],
  className = "",
  desktopImgUrl = "",
  mobileImgUrl = "",
}) {
  return (
    <div className={`${className} ${styles.projectContainer}`}>
      <div className={styles.content}>
        <div className={styles.header}>{projectTitle}</div>
        <div className={styles.titles}>{roles.join(" - ")}</div>
        <div className={styles.summary}>{description}</div>
        {/* <div className={styles.resumeButton}>
          <Button text={"Check out my resume"} />
        </div> */}
      </div>
      <div className={styles.projectImages}>
        <div className={styles.desktopContainer}>
          <Image
            alt="desktop image"
            src={desktopImgUrl}
            fill
            // placeholder="blur"
          />
        </div>
        <div className={styles.mobileContainer}>
          <Image
            alt="mobile image"
            src={mobileImgUrl}
            fill
            // placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;

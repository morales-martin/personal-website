import React from "react";
import styles from "./Contact.module.css";

import Button from "../UI/Button";

function Contact({ className }) {
  return (
    <div className={`${className} ${styles.contactContainer}`}>
      <div className={styles.content}>
        <div className={styles.header}>Get In Touch</div>
        <div className={styles.summary}>
          my inbox is always open. Whether you have a question or just want to
          create your next idea together !
        </div>
        <div className={styles.resumeButton}>
          <Button text={"Say Hello"} />
        </div>
      </div>
    </div>
  );
}

export default Contact;

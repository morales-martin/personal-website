import React from "react";
import styles from "./Contact.module.css";

import Button from "../UI/Button";

function Contact({ className }) {
  return (
    <div id="contact" className={`${className} ${styles.contactContainer}`}>
      <div className={styles.content}>
        <div className={styles.header}>Get In Touch</div>
        <div className={styles.summary}>
          my inbox is always open. Whether you have a question or just want to
          create your next idea together !
        </div>
        <div className={styles.resumeButton}>
          <Button
            href="mailto:morales-martin@outlook.com?subject=Hello from a visitor!"
            target="_blank"
            text={"Say Hello"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

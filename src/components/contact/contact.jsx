import React from "react";
import { getImageUrl } from "../../utili";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mail.png")} alt="email icon" />
          <a href="mailto:kk124572@outlook.com">kk124572@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedln.png")} alt="linkedln icon" />
          <a
            target="_blank"
            href="https://linkedin.com/in/krishna-nand-yadav-2290a425b"
          >
            linkedln.com/Krishna
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="github icon" />
          <a target="_blank" href="https://github.com/Krissny">
            github.com/Krishna
          </a>
        </li>
      </ul>
    </footer>
  );
};

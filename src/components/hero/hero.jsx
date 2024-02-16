import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utili";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Krishna</h1>
        <p className={styles.description}>
          I am a Frontend developer with strong foundation in HTML,CSS and
          Javascript.Reach out if you like to learn more
        </p>
        <a className={styles.contactBtn} href="mailto:kk124572@outlook.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/hero.png")}
        alt="him"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

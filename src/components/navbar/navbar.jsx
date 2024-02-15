import React, { useState } from "react";
import styles from "./navbar.module.css";
import { getImageUrl } from "../../utili";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.btn}
          src={
            menuOpen
              ? getImageUrl("nav/close.png")
              : getImageUrl("nav/navbar.png")
          }
          alt="menu-btn"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

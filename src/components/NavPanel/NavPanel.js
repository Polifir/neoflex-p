import React from "react";
import styles from "./NavPanel.module.sass";
import {
  iconArchive,
  iconDatabase,
  iconDollarSign,
  iconGlobe,
  iconHome,
  iconPieChart,
  iconLogo,
  iconNavigation,
} from "../../assets/index.js";

export function Navbar() {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <img src={iconLogo} alt="logo" />
      </div>
      <ul className="navbar">
        <li className={[styles.item, styles.itemActive].join(" ")}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.href}
          >
            <img src={iconHome} alt="logo" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <img src={iconGlobe} alt="logo" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.href}
          >
            <img src={iconArchive} alt="logo" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.href}
          >
            <img src={iconPieChart} alt="logo" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.href}
          >
            <img src={iconDollarSign} alt="logo" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.href}
          >
            <img src={iconDatabase} alt="logo" />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.href}
          >
            <img src={iconNavigation} alt="logo" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

import React from "react";
import styles from "../../styles/Menu.module.css";
import Image from "next/image";
export default function Menu() {
  return (
    <div className={styles.toolbar}>
      <Image
        src="/serao-transparent-black.png"
        width="120"
        height="120"
        className={styles.serao}
      />
      <div className={styles.toolkit}>
        <div className={styles.tool}>
          <img src="/icons/HOME.svg" className={styles.toolIcon} />
          <a href="/" className={styles.tools}>
            Classes
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/STATISTICS.svg" className={styles.toolIcon} />
          <a href="/profile" className={styles.tools}>
            Profile
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/GRID.svg" className={styles.toolIcon} />
          <a href="/leaderboard" className={styles.tools}>
            Leaderboard
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/LOCK CLOSED.svg" className={styles.toolIcon} />
          <a href="/admin" className={styles.tools}>
            Admin
          </a>
        </div>
        <div className={styles.tool}>
          <img src="/icons/CLOSE.svg" className={styles.toolIcon} />
          <p className={styles.tools}>Sign Out</p>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import React from "react";
import styles from "../styles.module.scss";
export const NavButton = () => {
  return (
    <Link href={"/Quiz"}>
      <button className={styles.navButton}>
        <text className={styles.findtherapist}>Find a therapist</text>
      </button>
    </Link>
  );
};

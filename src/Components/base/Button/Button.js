import Link from "next/link";
import React from "react";
import styles from "./styles/styles.module.scss";
export const Button = ({ title, onPressed }) => {
  return (
    <div>
      <Link href={`${onPressed}`}>
        <button className={styles.button}>
          <text className={styles.buttonText}>{title}</text>
        </button>
      </Link>
    </div>
  );
};

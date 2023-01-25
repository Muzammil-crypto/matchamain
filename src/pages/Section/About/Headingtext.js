import React from "react";
import styles from "./styles/styles.module.scss";
export const Headingtext = ({ text }) => {
  return (
    <div>
      <text className={styles.heading}>{text}</text>
    </div>
  );
};

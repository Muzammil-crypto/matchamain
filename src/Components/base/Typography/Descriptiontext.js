import React from "react";
import styles from "./styles/styles.module.scss";
export const Descriptiontext = ({ text }) => {
  return (
    <div>
      <text className={styles.description}>{text}</text>
    </div>
  );
};

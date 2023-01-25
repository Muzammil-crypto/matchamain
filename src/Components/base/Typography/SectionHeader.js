import React from "react";
import styles from "./styles/styles.module.scss";
export const SectionHeader = ({ title }) => {
  return (
    <div className={styles.sectionHeader}>
      <text>{title}</text>
    </div>
  );
};

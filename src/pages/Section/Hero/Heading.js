import React from "react";
import styles from "../Hero/styles/styles.module.scss";
export const Heading = () => {
  return (
    <div>
      <text className={styles.heading}>
        Share the
        <span style={{ marginLeft: 8, color: "#756FA5", fontFamily: "serif" }}>
          Health
        </span>
      </text>
    </div>
  );
};

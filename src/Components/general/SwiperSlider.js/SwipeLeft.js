import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./styles.module.scss";

export const SwipeLeft = ({ onClick }) => {
  return (
    <MdKeyboardArrowLeft
      className={styles.leftSwipe}
      size={40}
      color={"#0364E1"}
      onClick={onClick}
    />
  );
};

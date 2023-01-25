import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./styles.module.scss";
export const SwipeRight = ({ onClick }) => {
  return (
    <MdKeyboardArrowRight
      className={styles.rightSwipe}
      size={40}
      color={"#0364E1"}
      onClick={onClick}
    />
  );
};

import React from "react";
import style from "./styles/styles.module.scss";

export const MenuText = ({ text }) => {
  return (
    <div>
      <text className={style.provider}>{text}</text>
    </div>
  );
};

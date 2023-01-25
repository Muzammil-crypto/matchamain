import React from "react";
import style from "./styles/styles.module.scss";

export const LightTextFooter = ({ text, decoration }) => {
  return (
    <div>
      <text style={{ textDecoration: decoration }} className={style.lightText}>
        {text}
      </text>
    </div>
  );
};

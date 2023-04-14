import React from "react";
import { SectionHeader } from "../../../Components/base/Typography/SectionHeader";
import styles from "../../../Styles/Home.module.scss";
import { ImageWithText } from "./ImageWithText";
import style from "./styles/styles.module.scss";
export const About = () => {
  return (
    <div className={styles.center}>
      <div className={style.aboutBlock}>
        <SectionHeader title={"About Us"} />
        <ImageWithText />
      </div>
    </div>
  );
};

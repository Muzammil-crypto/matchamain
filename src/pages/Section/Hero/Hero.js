import React from "react";
import style from "../Hero/styles/styles.module.scss";
import styles from "../../../Styles/Home.module.scss";
import { Heading } from "./Heading";
import { HeroImage } from "./HeroImage";
import { SlugLine } from "./SlugLine";
import { Shadow } from "./Shadow.js";
export const Hero = () => {
  return (
    <div className={style.center}>
      <div className={style.hero}>
        <div className={style.heroTextBlock}>
          <Heading />
          <SlugLine />
        </div>
        <div className={style.heroImageBlock}>
          <HeroImage />
          <Shadow />
        </div>
      </div>
    </div>
  );
};

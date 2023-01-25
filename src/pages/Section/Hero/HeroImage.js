import Image from "next/image";
import React from "react";
import styles from "./styles/styles.module.scss";
export const HeroImage = () => {
  return (
    <Image
      className={styles.heroImage}
      alt=""
      src={"./hero.svg"}
      height={520}
      width={462.94}
    />
  );
};

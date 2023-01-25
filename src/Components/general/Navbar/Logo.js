import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
export const Logo = () => {
  return (
    <Image
      className={styles.navTitle}
      alt=""
      src={"./matcha.svg"}
      height={33}
      width={151.77}
    />
  );
};

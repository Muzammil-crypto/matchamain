import Image from "next/image";
import React from "react";
import styles from "./styles/styles.module.scss";
export const Shadow = () => {
  return (
    <Image
      className={styles.shadow}
      alt=""
      src={"./bottom.svg"}
      height={60}
      width={462.94}
    />
  );
};

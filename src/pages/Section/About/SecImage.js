import Image from "next/image";
import React from "react";
import styles from "./styles/styles.module.scss";
export const SecImage = ({ src }) => {
  return (
    <Image
      className={styles.secImage}
      alt=""
      src={src}
      height={340}
      width={593}
    />
  );
};

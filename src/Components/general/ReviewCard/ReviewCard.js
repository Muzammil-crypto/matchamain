import React from "react";
import styles from "./styles.module.scss";
import { Inter } from "@next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const TestmonialCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={item.image}
        alt={item.image}
        height={567}
        width={355}
      />
      <text className={styles.overlay}>
        {item.Review}
        <br />
        <span style={{ fontSize: 16, fontStyle: "italic" }}>{item.name}</span>
        <br />
        <span style={{ fontSize: 10 }}>{item.location}</span>
      </text>
    </div>
  );
};

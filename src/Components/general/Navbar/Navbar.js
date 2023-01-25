import React from "react";
import { TabTitle } from "../TabTitle";
import { ContactUs } from "./Button/ContactUs";
import { NavButton } from "./Button/FindTherapist";
import { Logo } from "./Logo";
import styles from "./styles.module.scss";
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <TabTitle />

      <div className={styles.titleBox}>
        <Logo />
      </div>
      <div className={styles.buttonBox}>
        <ContactUs />

        <NavButton />
      </div>
    </div>
  );
};

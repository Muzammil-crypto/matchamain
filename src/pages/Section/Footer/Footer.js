import React from "react";
import { LightTextFooter } from "./LightTextFooter";
import { MenuText } from "./MenuText";
import { SocialIcon } from "./SocialIcon";
import style from "./styles/styles.module.scss";
export const Footer = () => {
  return (
    <div className={style.centerFooter}>
      <div className={style.footerBlock}>
        <div className={style.firstBlock}>
          <MenuText text={"Match with a provider"} />
          <div className={style.menuItem}>
            <MenuText text={"Contact Us"} />
            <MenuText text={"Careers"} />
          </div>
          <MenuText text={"Follow Us"} />
        </div>
        <div className={style.secondBlock}>
          <LightTextFooter text={"2022 Matcha, Inc"} />
          <div className={style.menuItem}>
            <LightTextFooter decoration={"underline"} text={"Privacy"} />
            <LightTextFooter
              decoration={"underline"}
              text={"Terms and Conditions"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SocialIcon src="./Instagram.svg" />
            <SocialIcon src="./TikTok.svg" />
            <SocialIcon src="./LinkedIn.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

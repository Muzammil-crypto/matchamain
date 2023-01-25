import React from "react";
import { Button } from "../../../Components/base/Button/Button";
import { Descriptiontext } from "../../../Components/base/Typography/Descriptiontext";
import { aboutUsOne, aboutUsTwo, AUFSH } from "../../../const/texts";
import { ButtonT } from "../../../Quiz/Components/base/Button/ButtonT";
import { Headingtext } from "./Headingtext";
import { SecImage } from "./SecImage";
import style from "./styles/styles.module.scss";
export const ImageWithText = () => {
  return (
    <>
      <div className={style.featured}>
        <br />
        <br />
        <div className={style.leftBlock}>
          <Headingtext text={AUFSH} />
          <Descriptiontext text={aboutUsOne} />
          <div>
            <Button onPressed={"/Quiz"} title={"Quiz Time!"} />
          </div>
        </div>
        <div className={style.rightBlock}>
          <SecImage src={"./img1.svg"} />
        </div>
      </div>
      {/* Second Text Images */}
      <div className={style.featured}>
        <div className={style.leftBlock}>
          <Headingtext text={AUFSH} />
          <Descriptiontext text={aboutUsTwo} />
          <div className={style.buttons}>
            <Button title={"Get the ios App!"} />
            <Button title={"Get the ios App!"} />
          </div>
        </div>
        <div className={style.rightBlock}>
          <SecImage src={"./img2.svg"} />
        </div>
      </div>
    </>
  );
};

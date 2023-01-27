import React from "react";

export const ButtonT = ({ text,size, px ,py,bold, ...props }) => {
  return (
    <button className={` ${px?px:"px-14" } ${py?py:" py-3"} ${size?size:"text-lg"} ${bold&&bold} text-white  rounded-full font-sans bg-button shadow-lg  `} {...props} >
      {text}
    </button>
  );
};

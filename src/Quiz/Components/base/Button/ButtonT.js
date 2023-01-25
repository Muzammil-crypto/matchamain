import React from "react";

export const ButtonT = ({ text }) => {
  return (
    <button className="text-white text-lg rounded-full font-sans bg-button px-14 py-3 shadow-lg  ">
      {text}
    </button>
  );
};

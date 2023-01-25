import React from "react";

export const Heading = ({ text }) => {
  return (
    <div className="min-w-fit">
      <text className="text-xl font-serif font-normal mt-2 mb-2 w-9/12 text-left ">
        {text}
      </text>
    </div>
  );
};

import React from "react";

export const QuestionHeading = ({ text }) => {
  return (
    <div className="w-auto min-w-fit">
      <text className="text-lgx font-serif mt-2 mb-2 w-9/12 text-left">
        {text}
      </text>
      ;
    </div>
  );
};

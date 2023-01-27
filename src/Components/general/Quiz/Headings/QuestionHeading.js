import React from "react";

export const QuestionHeading = ({ text, color, size }) => {
  return (
    <div className="w-9/12">
      <text className={`${size} ${color} font-gelica mt-2 mb-2 w-9/12 text-left`}>
        {text}
      </text>
    </div>
  );
};

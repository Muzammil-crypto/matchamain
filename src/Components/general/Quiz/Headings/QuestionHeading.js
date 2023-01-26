import React from "react";

export const QuestionHeading = ({ text, color }) => {
  return (
    <div className="w-9/12">
      <text className={`text-lgx ${color} font-gelica mt-2 mb-2 w-9/12 text-left`}>
        {text}
      </text>
    </div>
  );
};

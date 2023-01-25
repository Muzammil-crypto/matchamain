import React from "react";

export const Heading = ({ text }) => {
  return (
    <div className="min-w-fit mt-20">
      <text className="text-xl font-gelica font-normal mt-2 mb-2 w-9/12 text-left ">
        We want to find you an awesome therapist,
        <br />
        <span className="text-lgx text-button font-gelica font-normal mt-2 mb-2 w-9/12 text-left ">
          Before that few questions first...
        </span>
      </text>
    </div>
  );
};

import { useFormikContext, ErrorMessage } from "formik";
import Link from "next/link";
import React, { useState } from "react";



export const LikertScale = ({scaleDigit, name, label}) => {
  const [clicked, setClicked] = useState(false);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const handleChange = (evt, value) => {
    setFieldTouched(name, true);
    setFieldValue(name, value);
  };
  return (
    <>
    <div className="flex flex-row items-center">
      <text className="text-button mr-2">Strongly Disagree</text>
      {scaleDigit.map((item, val) => (
        <div
          onClick={(e) => {
           
            handleChange(e, item.value);
            setClicked(!clicked);
          }}
          key={val}
        >
          <div
            key={val}
            className="w-20 h-20 text-white rounded-sm border border-blue m-1 flex items-center justify-center bg-button opacity-65 "
          >
            {item.value}
          </div>
        </div>
      ))}
      <text className="text-button ml-2">Strongly Agree</text>
    </div>
    <ErrorMessage name={name} />

    </>
  );
};

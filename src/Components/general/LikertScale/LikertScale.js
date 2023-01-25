import { useFormikContext, ErrorMessage } from "formik";
import React, { useState } from "react";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";



export const LikertScale = ({scaleDigit, name, label}) => {
  const [ listIndex, setListIndex ] = useState({});
    const { setFieldValue, setFieldTouched } = useFormikContext();

  const handleChange = (evt, value) => {
    setFieldTouched(name, true);
    setFieldValue(name, value);
  };
  return (
    <div className="w-auto mb-20">
      <QuestionHeading text={label} />
    
    <p className="text-error"><ErrorMessage name={name} /></p>

    <div className="flex flex-row items-center ">
      <text className="text-button mr-2 ">Strongly Disagree</text>
      {scaleDigit.map((item, val) => (
        <div
          onClick={(e) => {
           
            handleChange(e, item.value);
            setListIndex(val)

          }}
          key={val}
        >
          <div
            key={val}
            className={`shadow-xl border border-2 ${'border'? 'border-border':''} w-20 h-20 text-white rounded-sm m-1 flex items-center justify-center bg-bg ${listIndex===val &&  "bg-button"} `}
          >
            <p className={`${listIndex===val?  "text-white": 'text-button'} `}>{item.value}</p>
          </div>
        </div>
      ))}
      <text className="text-button ml-2">Strongly Agree</text>
    </div>

    </div>
  );
};
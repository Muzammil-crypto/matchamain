import React, { useState } from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { Alphabets } from "../../../const/texts";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";

export const SingleSelect = ({ options, name, label }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [ listIndex, setListIndex ] = useState({});


  const handleChange = (evt, value) => {
    setFieldTouched(name, true);
    setFieldValue(name, value);
  };

  return (
    <div className="w-auto mb-20">

      <QuestionHeading text={label} />
      <p className="text-error"><ErrorMessage name={name} /></p>

      {options.map((_, i) => {
        return (
          <div
          key={i}

            onClick={(e) => {
              handleChange(e, _.value);
            setListIndex(i)

            
            }}
            className={`mt-2 bg-gray w-96 p-1.5 rounded-lg h-3/4 flex flex-row  align-middle  shadow-lg items-center ${
              listIndex === i && "border border-button"
            }`}
          >
            <div className="bg-Radio w-12 flex justify-center p-3 rounded-lg shadow-xl  border border-black">
              <text>{Alphabets[i]}</text>
            </div>
            <div className="bg-gray w-100 flex justify-center p-3 rounded-sm ml-4 ">
              <text className="">{_.label}</text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

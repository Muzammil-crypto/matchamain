import React, { useContext, useState } from "react";
import { Alphabets } from "../../../const/texts";
import { FormContext } from "../../../contexts/FormContext";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";

export const SingleSelect = ({ options, name, label }) => {
  const [ listIndex, setListIndex ] = useState({});

  const {formValues, setFormValues, formErrors} = useContext(FormContext);

  const handleChange = (evt, value) => {
setFormValues({...formValues, mcq: value})  };

  return (
    <div className="mb-5 mt-2">
      
      <QuestionHeading text={label} />

      {options.map((_, i) => {
        return (
          <div
          key={i}

            onClick={(e) => {
            handleChange(e, _.label);
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
      {formErrors.mcq && <div className="text-error">{formErrors.mcq}</div>}
    </div>
  );
};

import React, { useContext, useState } from "react";
import { Alphabets } from "../../../const/texts";
import { FormContext } from "../../../contexts/FormContext";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";

export const SingleSelect = ({ options, name, label, child }) => {
  const [listIndex, setListIndex] = useState({});

  const { formValues, setFormValues, formErrors, isMarked, setIsMarked, isError, showChild , setShowChild } =
    useContext(FormContext);

  const handleChange = (evt, value) => {
    setFormValues({ ...formValues, mcq: value });
    formValues.myData.mcq.push(value);
    console.log({'ALL OPTIONS:': formValues.myData});
    value==='Yes'?
    showChildren():value==='No'&&setShowChild(false)

  };
const showChildren =()=> {
  child?
setShowChild(true):""
}

  return (
    <div className="mb-5 mt-2">
      <QuestionHeading size={"text-lg"} text={child?.question} />
      {isError && <div className="text-error">{formErrors.mcq}</div>}

      {options.map((_, i) => {
        return (
          <div
            key={i}
            onClick={ (e) => {
              handleChange(e, _.label);
              setListIndex(i);
             setIsMarked(true);
             
            }}
            className={`mt-2.5 bg-gray w-96 p-1.5 rounded-lg h-12 flex flex-row  align-middle  shadow-lg items-center ${
              listIndex === i && "border border-button"
            }`}
          >
            <div className="bg-Radio w-8 h-8 flex justify-center p-1 rounded-sm shadow-xl  border-2 border-alphaBorder">
              <text className="font-bold">{Alphabets[i]}</text>
            </div>
            <div className="bg-gray w-72 h-11 flex justify-center p-3 text-black  ml-4 ">
              <text className="">{_.label}</text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

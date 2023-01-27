import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";

export const CustomSelect = ({ label, ...props }) => {
  const {formErrors, isError} = useContext(FormContext);

  return (
    <div className="mb-5 mt-2">

      <QuestionHeading size={"text-lg"} text={label} />
{isError && <div className="text-error">{formErrors.option}</div>}

      <select
        className="w-96 ml-0 mt-1 p-4 shadow-xl rounded-lg bg-gray"
        {...props}
       
        

/>
     
    </div>
  );
};

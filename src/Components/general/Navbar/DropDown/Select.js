import React, { useContext } from "react";
import { FormContext } from "../../../../contexts/FormContext";
import { QuestionHeading } from "../../Quiz/Headings/QuestionHeading";

export const CustomSelect = ({ label, ...props }) => {
  const {formErrors, isError} = useContext(FormContext);

  return (
    <div className="mb-5 mt-2">
      <QuestionHeading text={label} />
      <select
        className="w-96 ml-0 mt-1 p-4 shadow-xl rounded-lg bg-gray"
        {...props}
       
        

/>
{isError && <div className="text-error">{formErrors.option}</div>}
     
    </div>
  );
};

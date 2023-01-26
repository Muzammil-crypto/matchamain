import React, {useContext} from "react";
import * as yup from "yup";
import { FormContext } from "../../../contexts/FormContext";
import { QuestionHeading } from "../../general/Quiz/Headings/QuestionHeading";

export const CustomInputField = ({ label, ...props }) => {
  const {formValues, setFormValues, formErrors} = useContext(FormContext);
  
  const handleChange = (e) => { 
    const {email, value} = e.target;
    setFormValues({...formValues, email: value})
    console.log(formValues)
  }
  return (

    <div className="w-96 mb-20">
     <QuestionHeading text={label} />
      <input
        className="w-96 ml-0 mt-2  mb-2  p-4 rounded-lg bg-white shadow-xl"
        {...props}
      
        value= {formValues.email}
        onChange={handleChange}
      />
     {formErrors.email && <div className="text-error">{formErrors.email}</div>}
    </div>
  );
};
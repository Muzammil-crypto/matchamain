import { useFormikContext, ErrorMessage } from "formik";
import React, { useContext, useState } from "react";
import { FormContext } from "../../../contexts/FormContext";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";



export const LikertScale = ({opt, name, label}) => {
  const {formValues, setFormValues, formErrors} = useContext(FormContext);

  const [ listIndex, setListIndex ] = useState({});

  const handleChange = (evt, value) => {
    setFormValues({...formValues, mcq: value})
  };
  return (
    <div className="mb-5 mt-2">
      <QuestionHeading text={label} />
      {formErrors.mcq && <div className="text-error">{formErrors.mcq}</div>}

    <div className="flex flex-row items-center ">
      <text className="text-button mr-2 ">Strongly Disagree</text>
      {opt?.map((item, val) => (
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

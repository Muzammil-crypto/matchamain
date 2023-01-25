import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";

export const MultiSelect = ({ name, label, choices, ...props }) => {
  const { setFieldValue, setFieldTouched, errors } = useFormikContext();
  const [selectedOptions, setSelectedOptions] = useState();

  
  function handleSelect(data) {
    setSelectedOptions(data);
    setFieldTouched(name, true);
  setFieldValue(name, selectedOptions);
  }

  return (
    
    <div className="w-96 mb-20">
  
  <QuestionHeading text={label} />
      <p className="text-error">{errors[name]}</p>
      

      <div 
        className="bg-gray rounded-non shadow-lg mt-1 py-1 px-1 rounded-lg"
        >

      <Multiselect
        {...props}
        placeholder={"--Select Any Option--"}
        showCheckbox
        name={name}
        options={choices}
        onSelect={handleSelect}
        selectedValues={selectedOptions}
      />
      </div>
    </div>
  );
};

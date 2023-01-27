import Multiselect from "multiselect-react-dropdown";
import React, { useContext, useState } from "react";
import { FormContext } from "../../../contexts/FormContext";
import { QuestionHeading } from "../Quiz/Headings/QuestionHeading";

export const MultiSelect = ({ name, label, choices, ...props }) => {
  const [selectedOptions, setSelectedOptions] = useState();
  const {formValues, setFormValues, formErrors, setIsMarked, isError} = useContext(FormContext);

  
  function handleSelect(data) {
    setSelectedOptions(data);
    setFormValues({...formValues, multi: selectedOptions})
    formValues.myData.multi.push(data);

    setIsMarked(true);
  }

  return (
    
    <div className="w-96 mb-20">
  
  <QuestionHeading text={label} />
      
  {isError && <div className="text-error">{formErrors.multi}</div>}

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

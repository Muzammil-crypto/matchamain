import { useField } from "formik";
import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { useFormikContext, ErrorMessage } from "formik";

export const MultiSelect = ({ name, label, choices, ...props }) => {
  const { setFieldValue, setFieldTouched, errors } = useFormikContext();
  const [field, meta] = useField(props);

  const handleChange = (options) => {
    debugger;
    setFieldTouched(name, true);
    var opt = [];
    for (let i = 0; i < options.length; i++) {
      opt.push({ name: options[i].name });
    }
    setFieldValue(name, opt);
  };

  return (
    <div className="w-96">
      <text className="text-black">{label}</text>
      <Multiselect
        className="bg-gray rounded-non shadow-lg mt-5 py-2 px-1 rounded-lg"
        {...props}
        {...field}
        showCheckbox
        name={name}
        options={choices}
        // selectedValues={selectedValue}
        onSelect={handleChange}
        // onRemove={onRemove}
        // displayValue={displayValue}
      />
      <div>{errors[name]}</div>
      <ErrorMessage name={name} />
    </div>
  );
};

import React from "react";
import { Field, useField, useFormikContext } from "formik";

const CheckboxWrapper = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    debugger;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <div {...configFormControl}>
      <label>
        <Field
          type="radio"
          name="picked"
          value="One"
          onChange={(e) => {
            debugger;
          }}
        />
        One
      </label>
      <label>
        <Field type="radio" name="picked" value="Two" />
        Two
      </label>
    </div>
  );
};

export default CheckboxWrapper;

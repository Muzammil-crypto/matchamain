import { useField } from "formik";
import React from "react";

export const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log({ field, meta });

  return (
    <div>
      <label>{label}</label>
      <select
        className="w-80 ml-10 mt-10 p-2 rounded-lg "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="ml-20">
          <p className="text-error mt-1 ml-7">{meta.error}</p>
        </div>
      ) : null}
    </div>
  );
};

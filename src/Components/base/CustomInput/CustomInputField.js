import { useField } from "formik";
import React from "react";
import { QuestionHeading } from "../../general/Quiz/Headings/QuestionHeading";

export const CustomInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log({ field, meta });

  return (
    <div className="w-96 mb-20">
     <QuestionHeading text={label} />

       {meta.touched && meta.error ? (
        <div className="ml-0">
          <p className="text-error mt-1 ">{meta.error}</p>
        </div>
      ) : null}
      <input
        className="w-96 ml-0 mt-2  mb-2  p-4 rounded-lg bg-white shadow-xl"
        {...field}
        {...props}
      />
     
    </div>
  );
};

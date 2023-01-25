import { useField } from "formik";
import React from "react";
import { QuestionHeading } from "../../Quiz/Headings/QuestionHeading";

export const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log({ field, meta });

  return (
    <div className="w-96 mb-20">
      <QuestionHeading text={label} />
      {meta.touched && meta.error ? (
        <div className="ml-0 ">
          <p className="text-error  ">{meta.error}</p>
        </div>
      ) : null}
      <select
        className="w-96 ml-0 mt-1 p-4 shadow-xl rounded-lg bg-gray"
        {...field}
        {...props}
      />
     
    </div>
  );
};

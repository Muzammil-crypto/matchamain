import { Field, Form, Formik, useField, useFormikContext } from "formik";
import React from "react";
import { ButtonT } from "../../../Quiz/Components/base/Button/ButtonT";
import { CustomInputField } from "../../base/CustomInput/CustomInputField";
import { LikertScale } from "../LikertScale/LikertScale";
import { MultiSelect } from "../MultiSelect/MultiSelect";
import { CustomSelect } from "../Navbar/DropDown/Select";
import { SingleSelect } from "../SingleSelect/SingleSelect";
import { Heading } from "./Headings/Heading";
import { QuestionHeading } from "./Headings/QuestionHeading";
import FormSchema from "../../../Formik/Schema/InputFieldSchema";

export const QuizForm = () => {
  const options = [
    { name: "Option 1️⃣", id: 1 },
    { name: "Option 2️⃣", id: 2 },
  ];const scaleDigit = [
    {
      value: "",
      label: 'Chose one'
    },
    {
      value: 1,
      label: 'one'
    },
    {
      value: 2,
      label: 'two'
    }, {
      value: 3,
      label: 'three'
    }, {
      value: 4,
      label: 'four'
    }, {
      value: 5,
      label: 'five'
    },
  ];
  const myOpt = [
    { value: "", label: "Please Select an Option" },
    { value: "1960", label: "Mujahid" },
    { value: "1961", label: "Mzamil" },
    { value: "1962", label: "Mzamil" },
    { value: "1963", label: "Mzamil" },
    { value: "1964", label: "Mzamil" },
    { value: "1965", label: "MzamilMzamil" },
  ];

  const radio = [
    { value: "", label: "Please Select an Option" },
    { value: "1960", label: "Mujahid" },
    { value: "1961", label: "Mzamil" },
    { value: "1962", label: "Mzamil" },
    { value: "1963", label: "Mzamil" },
    { value: "1964", label: "Mzamil" },
    { value: "1965", label: "MzamilMzamil" },
  ];

  return (
    <div className="bg-center align-middle justify-center items-center	 flex flex-col w-screen   ">
      <Formik
        initialValues={{
          email: "",
          option: "",
          MultiSelect: "",
          mcq: "",
          multi: "",
          multiChoices: "",
          likert: ''
        }}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <MultiSelect
                label={"Select here"}
                choices={options}
                displayValue={"name"}
                name="multiChoices"
              />
              {errors.MultiSelect && touched.MultiSelect && (
                <div>{errors.MultiSelect}</div>
              )}
            </div>
            <CustomInputField
              label="email"
              name="email"
              type="text"
              placeholder="Enter the Email"
            />
            <br />
            <CustomSelect
              label="Job Type"
              name="option"
              type="text"
              placeholder="Select The Job Type"
            >
              {myOpt.map((item, val) => (
                <option className="text-error" key={val} value={item.value}>
                  {item.label}
                </option>
              ))}
            </CustomSelect>
            <br />
            <Heading
              text={
                "We want to find you an awesome therapist.A few questions first..."
              }
            />

            <br />
            <QuestionHeading text={"therapist.A few questions first..."} />
            <br />
            <br />
            <LikertScale 
             label={
              "We want to find you an awesome therapist.A few questions first..."
            }
            scaleDigit={scaleDigit}
            name="likert"
             />
            <br />

            <br />
            <SingleSelect
              label={
                "We want to find you an awesome therapist.A few questions first..."
              }
              options={radio}
              name="mcq"
            />
            <br />
            <br />
            <ButtonT text={"Next"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

import {Form, Formik } from "formik";
import React from "react";
import { ButtonT } from "../../../Quiz/Components/base/Button/ButtonT";
import { CustomInputField } from "../../base/CustomInput/CustomInputField";
import { LikertScale } from "../LikertScale/LikertScale";
import { MultiSelect } from "../MultiSelect/MultiSelect";
import { CustomSelect } from "../Navbar/DropDown/Select";
import { SingleSelect } from "../SingleSelect/SingleSelect";
import { Heading } from "./Headings/Heading";
import FormSchema from "../../../Formik/Schema/InputFieldSchema";
import { myOpt, options, radio, scaleDigit } from "../../../const/texts";

export const QuizForm = () => {
  

  return (
    <div className="bg-center align-middle justify-center items-center	 flex flex-col w-screen   ">
      <Formik
        initialValues={{
          email: "",
          option: "",
          mcq: "",
          multi: "",
          likert: ''
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}    >
        {({ errors, touched }) => (
          <Form>
              <Heading
             
            />

            <br />
              <MultiSelect
                label={"Select any"}
                choices={options}
                displayValue={"name"}
                name="multi"
              />
             
            

            <CustomInputField
              label="email"
              name="email"
              type="text"
              placeholder="name@email.com"
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
          
            <LikertScale 
             label={
              "We want to find you an awesome therapist.A few questions first..."
            }
            scaleDigit={scaleDigit}
            name="likert"
             />
            <br />
            <SingleSelect
              label={
                "We want to find you an awesome therapist.A few questions first..."
              }
              options={radio}
              name="mcq"
            />
            <br />
            <ButtonT  type="submit"  text={"Next"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

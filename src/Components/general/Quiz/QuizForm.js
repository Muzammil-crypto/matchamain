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
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { questions } from "../../../const/questions";
import { QuestionHeading } from "./Headings/QuestionHeading";

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
            <div className="flex flex-col align-middle justify-center items-center	 w-screen  ">
            {questions.map((item, val) => {
              if(item.type === "option"){

               return <div className="w-96" key={val}>
                <QuestionHeading key={val} text={item.question}/>
              
              <SingleSelect
              label={
               item.select
              }
              options={item.options}
              name="mcq"
            />
              </div>
              }
              else if(item.type === "select"){
               return <div key= {val}>
                  <CustomSelect
              label="Job Type"
              name="option"
              type="text"
              placeholder="Select The Job Type"
            >
              {item.options.map((item, val) => (
                
                <option  className=" bg-white text-white" key={val} value={item.value}>
                  {item.label}
                </option>
              ))}
            </CustomSelect>
                </div>
              }
              else if(item.type === "mcq"){
                return <div key={val}>
                <QuestionHeading key={val} text={item.question}/>
                  </div>
              }
              else if(item.type === "multi"){
                return <div key={val}>
                <QuestionHeading key={val} text={item.question}/>
                <MultiSelect
                label={"Select any"}
                choices={item?.options}
                displayValue={"name"}
                name="multi"
                />
                </div>
              }
              else if(item.type === "input"){
                return <div key={val}>
                <QuestionHeading key={val} text={item.question}/>
                <CustomInputField
              label="email"
              name="email"
              type="text"
              placeholder="name@email.com"
            />
                </div>
              }

              
          
})}








              {/* <Heading
             
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
                
                <option  className=" bg-white text-white" key={val} value={item.value}>
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
            <div className="flex flex-row">
            <ButtonT  type="submit"  text={"Next"} />
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center ml-96 pl-96">
              <MdOutlineKeyboardArrowDown color="white" size={40}  className=" color-white bg-button w-8 mr-1 " />
              <MdOutlineKeyboardArrowUp color="white" size={40}  className=" color-white bg-button w-8" />
              </div>
            </div>
            </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

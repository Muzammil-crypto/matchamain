import React, {  useEffect, useContext, useState } from "react";
import { ButtonT } from "../../../Quiz/Components/base/Button/ButtonT";
import { CustomInputField } from "../../base/CustomInput/CustomInputField";
import { LikertScale } from "../LikertScale/LikertScale";
import { MultiSelect } from "../MultiSelect/MultiSelect";
import { SingleSelect } from "../SingleSelect/SingleSelect";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { questions } from "../../../const/questions";
import { QuestionHeading } from "./Headings/QuestionHeading";
import { FormContext } from "../../../contexts/FormContext";
import { CustomSelect } from "../DropDown/Select";

export const QuizForm = () => {

  const {
    formValues,
    setFormValues,
    formErrors,
    setFormErros,
    isSubmit,
    setIsSubmit,
    step,
    setStep,
    isMarked, 
    setIsMarked,
    setIsError,
    isError
  } = useContext(FormContext);
  const handleChange = (e) => {
    
    const { option, value } = e.target;
    setFormValues({ ...formValues, option: value });
    formValues.myData.option.push(value);

    setIsMarked(true)

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormErros(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email&&!regex.test(values.email)) {
      errors.email = "A Valid Email is required";
    } 
    if (!values.option && isMarked===false) {
      errors.option = "Option is required";
    }
   if (!values.multi.length||isError===true) {
      errors.multi = "Please Select Any";
    }
    if(isError===true ){
      errors.mcq = "Please Select an Option"
    }
    if(isError===true){
      errors.likert = "Please Select one"
    }

    return errors;
  };
  console.log('===>> isError', isError)
  return (
    <div className="mb-80 ml-60 w-screen">
      <form onSubmit={handleSubmit} >
        <div className="ml-20 ">
          {questions.map((item, val) => {
            if (step === item.id) {
              if (item.type === "option") {
                return (
                  <div className="mt-20" key={val}>
                    <QuestionHeading size={"text-lgx"} color={"text-black"} key={val} text={item.question} />

                    <SingleSelect
                      label={item.select}
                      options={item.options}
                     
                
                    />
                    {item.child? item.children?.map((item, val) => {
                      return(
                        <>
                        <QuestionHeading size={"text-lgx"} color={"text-black"} key={val} text={item.question} />
                        <CustomSelect
                          label={item.select}
                          name="option"
                          type="text"
                          placeholder="Select The Job Type"
                          onChange={handleChange}
                        >
                          {item.options.map((item, val) => (
                            <option className=" bg-white text-white" key={val} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </CustomSelect>
                        </>
                      );

                    })  : ""}
                  </div>
                );
              } else if (item.type === "select") {
                return (
                  <div className="mt-20" key={val}>
                    <QuestionHeading size={"text-lgx"} color={"text-black"} key={val} text={item.question} />

                    <CustomSelect
                      label={item.select}
                      name="option"
                      type="text"
                      placeholder="Select The Job Type"
                      onChange={handleChange}
                    >
                      {item.options.map((item, val) => (
                        <option
                          className=" bg-white text-white"
                          key={val}
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      ))}
                    </CustomSelect>
                  </div>
                );
              } else if (item.type === "mcq") {
                return (
                  <div className="mt-20" key={val}>
                    <QuestionHeading size={"text-lgx"} color={"text-black"} key={val} text={item.question} />
                    <LikertScale
                    label={item.select}
                    opt={item.options}
                   />
                  </div>
                );
              } else if (item.type === "multi") {
                return (
                  <div className="mt-20" key={val}>
                    <QuestionHeading size={"text-lgx"} color={"text-black"} key={val} text={item.question} />
                    <MultiSelect
                      label={"Select any"}
                      choices={item?.options}
                      displayValue={"name"}
                      name="multi"
                    />
                  </div>
                );
              } else if (item.type === "input") {
                return (
                  <div className="mt-20" key={val}>
                    <QuestionHeading size={"text-lgx"} color={"text-black"} key={val} text={item.question} />
                    <CustomInputField
                      label="Write below "
                      name="name"
                      type="text"
                      placeholder="name@email.com"
                    />
                  </div>
                );
              }
            }
          })}

          <div className="flex flex-row">
            <ButtonT
              size={"text-lg"}
              px={"px-4"}
              py={"py-1"}
              bold={"font-bold"}
              type="submit"
              text={"Next"}
              onClick={() => {
                if(step < questions.length-1 && isMarked===true)
                {
                  setIsMarked(false)
                  setIsError(false)
                  setStep(step + 1);
                }
                else{
                  setIsError(true)
                }
              }}
            />
            <div className="flex flex-row ml-60">
              <div className="flex flex-row items-center justify-center ml-96">
                <MdOutlineKeyboardArrowDown
                 onClick={() => {
                  if(step < questions.length && step > 1)
                  {setStep(step - 1)
                  }
                 
                  else{
                    setStep(1)
                  }
                }}
                  color="white"
                  size={40}
                  className=" color-white bg-button w-8 mr-1 "
                />
                <MdOutlineKeyboardArrowUp
                 onClick={() => {
                  if(step < questions.length-1 && step > 0)
                  {setStep(step + 1)
                  }
                 
                  else{
                    setStep(1)
                  }
                }}
                  color="white"
                  size={40}
                  className=" color-white bg-button w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

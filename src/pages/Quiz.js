import { useState } from "react";
import { Navbar } from "../Components/general/Navbar/Navbar";
import { QuizForm } from "../Components/general/Quiz/QuizForm";
import { Footer } from "./Section/Footer/Footer";
import { FormContext } from "../contexts/FormContext";
export default function Quiz() {
  const initialValues = {
    mcq: "",
    email: "",
    option: "",
    multi: [],
    likert: "",
    AllData: [],
  
  };
  const [showChild, setShowChild] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErros] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);
  return (
    <FormContext.Provider
      value={{
        showMessage,
        setShowMessage,
        isMarked,
        setIsMarked,
        formValues,
        setFormValues,
        formErrors,
        setFormErros,
        isSubmit,
        setIsSubmit,
        step,
        setStep,
        isError,
        setIsError,
        showChild,
        setShowChild,
      }}
    >
      <div>
        <Navbar />
        <QuizForm />
        <Footer />
      </div>
    </FormContext.Provider>
  );
}

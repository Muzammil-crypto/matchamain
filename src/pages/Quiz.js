import { FormikContext } from "formik";
import { createContext, useState } from "react";
import { Navbar } from "../Components/general/Navbar/Navbar";
import { QuizForm } from "../Components/general/Quiz/QuizForm";
import { Footer } from "./Section/Footer/Footer";
import { FormContext } from "../contexts/FormContext";
export default function Quiz() {
  const initialValues={
    mcq: "",
    email: "",
    option: "",
    multi: [],
    likert: "",

  }
  const [formValues , setFormValues] = useState(initialValues);
  const [formErrors , setFormErros] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [step, setStep] = useState(0)
  return (
    <FormContext.Provider  value={{ 
      formValues,
      setFormValues,
      formErrors,
      setFormErros,
      isSubmit,
      setIsSubmit,
      step,
      setStep
     }}>
    <div >
      <Navbar />
      <QuizForm />
      <Footer />
    </div>
    </FormContext.Provider>

  );
}

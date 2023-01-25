import * as yup from "yup";

const FormSchema = yup.object().shape({
  mcq: yup.string().required("Select MCQ"),

  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  option: yup.string().required("Select one option"),
  multi: 
    yup.object().shape({
      multiChoices: yup.string().required("Please Select  "),
    }),
  
  likert: yup.string().required("Select one option"),
});
export default FormSchema;

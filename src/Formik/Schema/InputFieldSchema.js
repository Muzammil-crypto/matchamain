import * as yup from "yup";

const FormSchema = yup.object().shape({
  mcq: yup.string().required("Mark one of the following choices "),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  option: yup.string().required("Select one option"),
  multi: yup.array(yup.object()).required("Select at least two options"),


  likert: yup.string().required("Select One Option"),
});
export default FormSchema;
 
 
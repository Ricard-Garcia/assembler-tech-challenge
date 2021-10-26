import * as Yup from "yup";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("This must be a valid email address")
    .required("The email is required"),
  password: Yup.string()
    .min(6, "The password is too short")
    .max(40, "The password is too long")
    .required("The password is required"),
});

export default signInSchema;

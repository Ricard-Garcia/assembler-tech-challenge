import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../../Input";
import Button from "../../Button";

import { PAGES } from "../../../constants/routes";
import signUpSchema from "./sign-up-schema";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (signUpState) => {
      setIsLoading(true);

      try {
        const formData = new FormData();
        formData.append("firstName", signUpState.firstName);
        formData.append("firstName", signUpState.firstName);
        formData.append("firstName", signUpState.firstName);
        formData.append("firstName", signUpState.firstName);

        setTimeout(() => {
          history.push(PAGES.HOME);
        }, 2000);
      } catch (error) {
        console.log("Couldn't sign up: ", error);
      }
    },
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={() => {
          console.log("submitted sign up!");
        }}
      >
        <Input label="First name" id="firstName" />
        <Input label="Last name" id="lastName" />
        <Input label="Email" id="email" type="email" />
        <Input label="Password" id="password" type="password" />
        <Input label="Confirm password" id="confirmPassword" type="password" />
        <Button isBackButton>Back</Button>
        <Button submitButton>Sign up</Button>
      </form>
    </div>
  );
}

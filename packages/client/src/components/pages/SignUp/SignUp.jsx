import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../../Input";
import Button from "../../Button";

import { PAGES } from "../../../constants/routes";
import { registerUser } from "../../../api/user-api";
import signUpSchema from "./sign-up-schema";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (signUpState) => {
      setIsLoading(true);

      try {
        const formData = new FormData();
        formData.append("firstName", signUpState.firstName);
        formData.append("lastName", signUpState.lastName);
        formData.append("email", signUpState.email);

        await registerUser(formData);

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
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="First name"
          id="firstName"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.firstName}
          errorMessage={formik.errors.firstName}
          hasErrorMessage={formik.touched.firstName}
          disabled={isLoading}
        />
        <Input
          label="Last name"
          id="lastName"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.lastName}
          errorMessage={formik.errors.lastName}
          hasErrorMessage={formik.touched.lastName}
          disabled={isLoading}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.email}
          errorMessage={formik.errors.email}
          hasErrorMessage={formik.touched.email}
          disabled={isLoading}
        />
        <Input label="Password" id="password" type="password" />
        <Input label="Confirm password" id="confirmPassword" type="password" />
        <Button isBackButton>Back</Button>
        <Button submitButton>Sign up</Button>
      </form>
    </div>
  );
}

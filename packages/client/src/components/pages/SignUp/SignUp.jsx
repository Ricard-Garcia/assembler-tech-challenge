import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../../Input";
import Button from "../../Button";

import { PAGES } from "../../../constants/routes";

import { singUpWithEmailAndPassword } from "../../../services/auth";
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
        const formData = {
          firstName: signUpState.firstName,
          lastName: signUpState.lastName,
          email: signUpState.email,
        };

        // Sign user up in Firebase
        await singUpWithEmailAndPassword(
          signUpState.email,
          signUpState.password
        );
        // Create user in db
        await registerUser(formData);

        setIsLoading(false);

        setTimeout(() => {
          history.push(PAGES.SIGN_IN);
        }, 3000);
      } catch (error) {
        console.log("Couldn't sign up: ", error);
        setIsLoading(false);
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
          isRequired
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
          isRequired
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
          isRequired
        />
        <Input
          label="Password"
          id="password"
          type="password"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.password}
          errorMessage={formik.errors.password}
          hasErrorMessage={formik.touched.password}
          disabled={isLoading}
          isRequired
        />
        <Input
          label="Confirm password"
          id="confirmPassword"
          type="password"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          errorMessage={formik.errors.confirmPassword}
          hasErrorMessage={formik.touched.confirmPassword}
          disabled={isLoading}
          isRequired
        />
        <div className="buttons-wrapper">
          <Button isBackButton>Back</Button>
          <Button submitButton>Sign up</Button>
        </div>
      </form>
    </div>
  );
}

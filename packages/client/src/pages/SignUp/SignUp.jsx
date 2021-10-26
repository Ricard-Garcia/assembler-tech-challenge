import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { PAGES } from "../../constants/routes";

import { singUpWithEmailAndPassword } from "../../services/auth";
import { registerUser, getRandomPicture } from "../../api/user-api";

import signUpSchema from "./sign-up-schema";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
        // Set random profile picture
        const randomPicture = (await getRandomPicture()).data.results[0].picture
          .medium;

        const formData = {
          firstName: signUpState.firstName,
          lastName: signUpState.lastName,
          email: signUpState.email,
          profilePicture: randomPicture,
        };

        // Sign user up in Firebase
        await singUpWithEmailAndPassword(
          signUpState.email,
          signUpState.password
        );
        // Create user in db
        await registerUser(formData);

        setTimeout(() => {
          history.push(PAGES.SIGN_IN);
        }, 1000);
      } catch (error) {
        console.log("Couldn't sign up: ", error);
      }
    },
  });

  return (
    <Layout>
      <div className="form-wrapper fx-border mb-5 p-4">
        <h1 className="fnt-title fnt-thin fnt-light mb-5 container-fluid px-0">
          Sign Up
        </h1>
        <form className="row" onSubmit={formik.handleSubmit}>
          <Input
            cols="6"
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
            cols="6"
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
            cols="6"
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
            cols="6"
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
          <div className="buttons-wrapper d-flex justify-content-end mt-3">
            <Button isBackButton isDark>
              Back
            </Button>
            <Button classNames="ms-3" submitButton>
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

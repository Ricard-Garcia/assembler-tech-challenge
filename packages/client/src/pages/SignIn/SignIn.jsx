import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { PAGES } from "../../constants/routes";

import { signIn } from "../../services/auth";
import { authenticateUser } from "../../api/user-api";
import { signInAction } from "../../redux/user/actions";

import signInSchema from "./sign-in-in-schema";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (signInState) => {
      setIsLoading(true);
      try {
        const signInResponse = await signIn(
          signInState.email,
          signInState.password
        );
        const token = signInResponse.user.multiFactor.user.accessToken;
        await authenticateUser(token);

        // Change redux state
        const dbUser = (await authenticateUser(token)).data.data;

        const loggedUser = {
          firstName: dbUser.firstName,
          email: dbUser.email,
          profilePicture: dbUser.profilePicture || "",
          isLogged: true,
          mongoId: dbUser._id,
        };

        // Add state to redux
        dispatch(signInAction(loggedUser));
        // Set local storage
        // setLocalStorage(loggedUser, "User state");

        // Redirect to home
        setTimeout(() => {
          history.push(PAGES.HOME);
        }, 300);
      } catch (error) {
        return toast(error.message, { type: "error" });
      }
    },
  });

  return (
    <Layout>
      <div className="form-wrapper fx-border mb-5 p-4">
        <h1 className="fnt-title fnt-thin fnt-light mb-5 container-fluid px-0">
          Sign In
        </h1>
        <form className="row" onSubmit={formik.handleSubmit}>
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
          <div className="buttons-wrapper d-flex justify-content-between align-items-center mt-3">
            <p className="fnt-light m-0">
              Not registered?
              <Link to={PAGES.SIGN_UP}>
                <strong> Sign up</strong>
              </Link>
            </p>
            <Button submitButton>Sign in</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

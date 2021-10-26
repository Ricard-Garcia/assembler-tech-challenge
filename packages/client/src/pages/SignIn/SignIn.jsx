import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PAGES } from "../../constants/routes";

import { signIn } from "../../services/auth";
import { authenticateUser } from "../../api/user-api";
import { signInAction } from "../../redux/user/actions";

import signInSchema from "./sign-in-in-schema";

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
        dispatch(
          signInAction({
            firstName: dbUser.firstName,
            email: dbUser.email,
            profilePicture: dbUser.profilePicture || "",
            isLogged: true,
            mongoId: dbUser._id,
          })
        );

        // Redirect to home
        setTimeout(() => {
          history.push(PAGES.HOME);
        }, 1000);
      } catch (error) {
        console.log("Couldn't sign in: ", error);
      }
    },
  });

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <Button submitButton>Sign in</Button>
        <p>
          Not registered?
          <Link to={PAGES.SIGN_UP}>
            <strong> Sign up</strong>
          </Link>
        </p>
        <Link to={PAGES.HOME}>
          <strong>HOME</strong>
        </Link>
      </form>
    </div>
  );
}

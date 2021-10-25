import React from "react";
// import {useFormik} from "formik";

import { Link } from "react-router-dom";

import { PAGES } from "../../../constants/routes";

import Input from "../../Input";
import Button from "../../Button";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form
        onSubmit={() => {
          console.log("submitted sign in!");
        }}
      >
        <Input label="Email" id="email" type="email" />
        <Input label="Password" id="password" type="password" />
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

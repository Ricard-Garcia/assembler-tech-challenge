import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { PAGES } from "../../constants/routes";

import uploadSchema from "./upload-schema";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Upload() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: uploadSchema,
    onSubmit: async (uploadState) => {
      setIsLoading(true);
      try {
        // Redirect to home
        setTimeout(() => {
          history.push(PAGES.HOME);
        }, 300);
      } catch (error) {
        console.log("Couldn't upload track: ", error);
      }
    },
  });

  return (
    <Layout>
      <div className="upload-wrapper d-flex container-fluid row g-4 px-5 m-0">
        <h1 className="fnt-light fnt-thin col col-12 m-0 text-uppercase">
          Upload a meme
        </h1>
        <div className="left-side col col-6">left</div>
        <div className="right-side col col-6">
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
              <Button backButton>Back</Button>
              <Button submitButton>Upload</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

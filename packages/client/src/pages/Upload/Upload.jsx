import React, { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import { PAGES } from "../../constants/routes";
import { uploadMeme } from "../../api/meme-api";

import uploadSchema from "./upload-schema";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Upload() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      tag: "",
      url: "",
    },
    validationSchema: uploadSchema,
    onSubmit: async (uploadState) => {
      setIsLoading(true);
      try {
        const formData = {
          name: uploadState.name,
          tag: uploadState.tag,
          url: uploadState.url,
        };

        // Upload meme to database
        await uploadMeme(formData);

        // Redirect to home
        setTimeout(() => {
          history.push(PAGES.HOME);
        }, 300);
      } catch (error) {
        console.log("Couldn't upload meme: ", error);
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
              label="Name"
              id="name"
              cols="8"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.name}
              errorMessage={formik.errors.name}
              hasErrorMessage={formik.touched.name}
              disabled={isLoading}
              isRequired
            />
            <Input
              label="tag"
              id="tag"
              cols="4"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.tag}
              errorMessage={formik.errors.tag}
              hasErrorMessage={formik.touched.tag}
              disabled={isLoading}
            />
            <Input
              label="Meme url"
              id="memeUrl"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.memeUrl}
              errorMessage={formik.errors.memeUrl}
              hasErrorMessage={formik.touched.memeUrl}
              disabled={isLoading}
            />
            <div className="buttons-wrapper d-flex justify-content-between align-items-center mt-3">
              <Button isDark isBackButton>
                Back
              </Button>
              <Button submitButton>Upload</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

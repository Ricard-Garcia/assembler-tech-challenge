import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import { PAGES } from "../../constants/routes";
import { uploadMeme } from "../../api/meme-api";

import uploadSchema from "./upload-schema";

import "./Upload.scss";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";

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
      file: "",
    },
    validationSchema: uploadSchema,
    onSubmit: async (uploadState) => {
      // Make sure a meme is referenced
      if (!uploadState.url && !uploadState.file) {
        return console.log("You should choose at least one upload option");
      }

      setIsLoading(true);

      try {
        // Add url if set
        if (uploadState.url && !uploadState.file) {
          let formDataJSON = {
            name: uploadState.name,
            tag: uploadState.tag,
            url: uploadState.url,
          };
          // Upload meme to database
          await uploadMeme(formDataJSON);
        } else {
          const formDataFile = new FormData();
          formDataFile.append("name", uploadState.name);
          formDataFile.append("tag", uploadState.tag);
          // If only file is uploaded
          if (!uploadState.url && uploadState.file) {
            formDataFile.append("file", uploadState.file);
            // Upload meme to database
            await uploadMeme(formDataFile);
          }
          // If both are set prioritize file
          else {
            formDataFile.append("file", uploadState.file);
            // Upload meme to database
            await uploadMeme(formDataFile);
          }
        }

        // Redirect to home
        setTimeout(() => {
          history.push(PAGES.HOME);
        }, 1000);
        return toast("Correctly uploaded meme! Redirecting to home.", {
          type: "success",
        });
      } catch (error) {
        console.log("Couldn't upload meme: ", error);
      }
    },
  });

  const memeFileOnChange = (event) => {
    formik.setFieldValue("file", event.target.files[0]);
  };

  return (
    <Layout>
      <PageTitle title="Upload a meme" />
      <div className="upload-wrapper d-flex container-fluid row g-4 px-5 m-0">
        <div className="meme-preview col col-6 ps-0">
          <div className="preview-wrapper bg-light-20">
            <img
              src="https://memegenerator.net/img/instances/60028393.jpg"
              alt="Upload file"
            />
          </div>
        </div>
        <div className="col col-6 pe-0">
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
              id="url"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.url}
              errorMessage={formik.errors.url}
              hasErrorMessage={formik.touched.url}
              disabled={isLoading}
            />
            <Input
              label="Meme file"
              id="memeFile"
              type="file"
              handleChange={memeFileOnChange}
              handleBlur={formik.handleBlur}
              // value={formik.values.file}
              errorMessage={formik.errors.file}
              hasErrorMessage={formik.touched.file}
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

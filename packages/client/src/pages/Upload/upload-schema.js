import * as Yup from "yup";

const uploadSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The first name is too short!")
    .max(50, "The first name is too long!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted")
    .required("The meme name is required"),
  url: Yup.string()
    .min(2, "The last name is too short!")
    .max(50, "The last name is too long!")
    .url("Not a valid URL"),
  url: Yup.string()
    .min(2, "The last name is too short!")
    .max(50, "The last name is too long!")
    .url("Not a valid URL"),
  tag: Yup.string()
    .oneOf(
      ["funny", "angry", "happy", "sad", "art", "sport"],
      "Tag not avaliable"
    )
    .required("At least one tag should be declared"),
});

export default uploadSchema;

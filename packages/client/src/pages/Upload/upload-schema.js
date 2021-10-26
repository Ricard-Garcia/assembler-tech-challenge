import * as Yup from "yup";

const uploadSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The meme name is too short!")
    .max(50, "The meme name is too long!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted")
    .required("The meme name is required"),
  tag: Yup.string()
    .matches(/^[a-z\s]+$/, "Only lowercase letters")
    .oneOf(
      ["funny", "angry", "happy", "sad", "art", "sport"],
      "Tag not avaliable"
    )
    .required("At least one tag should be declared"),
  url: Yup.string().url("Not a valid URL"),
});

export default uploadSchema;

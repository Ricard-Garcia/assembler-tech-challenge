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
  url: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
});

export default uploadSchema;

import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  searchedBar: Yup.string()
    .min(1, "The text is too short")
    .max(100, "The text is too long"),
});

export default searchSchema;

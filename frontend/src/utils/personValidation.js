import * as Yup from "yup";

export const personValidation = Yup.object().shape({
  firstname: Yup.string()
    .required("*First name is required!")
    .min(2, "Too short, enter a real name!"),

  lastname: Yup.string()
    .required("*Last name is required!")
    .min(2, "Too short, enter a real lastname!"),

  birthdate: Yup.string().required("*Birth date is required!"),

  email: Yup.string()
    .email("Please enter a valid email address. (e.g., name@example.com)")
    .notRequired(),
});

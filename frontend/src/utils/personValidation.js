import * as Yup from "yup";

export const personValidation = Yup.object({
  firstname: Yup.string()
    .min(2, "Too short")
    .required("First name is required"),

  lastname: Yup.string().min(2, "Too short").required("Last name is required"),
  birthdate: Yup.date().required("Birth date is required"),
  email: Yup.string().email("Invalid email").notRequired(),
});

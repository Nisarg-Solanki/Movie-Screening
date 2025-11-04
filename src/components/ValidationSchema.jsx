import * as Yup from "yup";

const passwordRules =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,}$";
export const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Name must have minimum 3 Characters")
    .max(15, "Name should not exceed 15 Characters")
    .required("Required"),

  age: Yup.number().required("Required"),

  email: Yup.string().trim().email("Invalid email").required("Required"),

  password: Yup.string()
    .trim()
    .min(6, "Make Stronger Password")
    // .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),

  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().trim().email("Invalid email").required("Required"),

  password: Yup.string().trim().required("Required"),
});

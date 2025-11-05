import styles from "../CSS/SignUpInputs.module.css";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupActions } from "../store/signupSlice";
import CustomTextInput from "./CustomTextInput";
import { SignUpValidationSchema } from "./ValidationSchema";

const SignUpInputs = () => {
  const dispatch = useDispatch();
  const signUpItems = useSelector((store) => store.signup);
  const navigate = useNavigate();
  const validation = (values, { resetForm }) => {
    const emailExists = signUpItems.some((item) => item.email === values.email);

    if (emailExists) {
      alert("Email is already in use");
    } else {
      dispatch(signupActions.addValues(values));
      resetForm();
      navigate("/signinui");
    }
  };

  return (
    <div className={`${styles["main-container"]}`}>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["outer-text"]}`}>
          <h1>Unlimited movies, TV shows and more</h1>
        </div>
        <div className={`${styles["outer-text"]}`}>
          Watch anywhere. Cancel anytime.
        </div>
        <div className={`${styles["outer-text"]}`}>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className={`${styles["outer-container"]}`}>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["SignUpText"]}`}>Sign Up</div>
            <Formik
              initialValues={{
                name: "",
                age: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignUpValidationSchema}
              onSubmit={validation}
            >
              {(props) => {
                return (
                  <form
                    onSubmit={props.handleSubmit}
                    className={`${styles["inputContainer"]}`}
                  >
                    <CustomTextInput
                      type="text"
                      name="name"
                      placeholder="User Name"
                    />
                    <CustomTextInput type="text" name="age" placeholder="Age" />
                    <CustomTextInput
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    <CustomTextInput
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <CustomTextInput
                      type="password"
                      name="confirmPassword"
                      placeholder=" Confirm Password"
                    />

                    <button className={`${styles["buttons"]}`} type="submit">
                      Sign Up
                    </button>
                  </form>
                );
              }}
            </Formik>

            <div>Need Help?</div>
            <div>
              Already User?
              <span
                onClick={() => navigate("/signinui")}
                style={{ cursor: "pointer", textDecorationLine: "underline" }}
              >
                <b>Sign in now</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpInputs;

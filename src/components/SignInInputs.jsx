import styles from "./CSS/SignInInputs.module.css";
import { Formik } from "formik";
import CustomTextInput from "./CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SignInValidationSchema } from "./ValidationSchema";
import { signinActions } from "../store/signinSlice";

export let obj;

const SignInInputs = () => {
  const items = useSelector((store) => store.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = (values, { resetForm }) => {
    console.log(items);
    console.log(values);
    let newData;
    {
      let validation = items.find((data) => {
        console.log("data", data);
        newData = data;
        return data.email === values.email && data.password === values.password;
      });
      if (validation) {
        console.log("name is here", newData.name);
        dispatch(signinActions.addValues(newData.name));
        navigate("home");
        resetForm();
      } else {
        {
          alert("Check your Email and Password");
        }
      }
    }
  };

  return (
    <div className={`${styles["main-container"]}`}>
      <div className={`${styles["outer-container"]}`}>
        <div className={`${styles["container"]}`}>
          <div className={`${styles["SignUpText"]}`}>Sign In</div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignInValidationSchema}
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
                    name="email"
                    placeholder="Email or Phone Number"
                  />
                  <CustomTextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <button className={`${styles["buttons"]}`} type="submit">
                    Sign In
                  </button>
                </form>
              );
            }}
          </Formik>

          <div>Need Help?</div>
          <div>
            New to Movie?
            <span
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", textDecorationLine: "underline" }}
            >
              <b>Sign up now</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInputs;

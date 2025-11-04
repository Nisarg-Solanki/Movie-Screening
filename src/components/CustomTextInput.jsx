import { useField } from "formik";
import "./CSS/CustomTextInputs.css";

const CustomTextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} className="input-class" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomTextInput;

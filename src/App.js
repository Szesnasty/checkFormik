import { useState } from "react";
import "./App.css";
import { Formik } from "formik";
import * as yup from "yup";
import { RenderForm } from "./RenderForm";
function App() {
  const [goForward, setGoForward] = useState(false);
  const SignupSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    surname: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    guguname: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        lastName: "",
        guguname: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <RenderForm setGoForward={setGoForward} goForward={goForward} />
      )}
    </Formik>
  );
}

export default App;

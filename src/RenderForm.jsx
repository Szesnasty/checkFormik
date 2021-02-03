import React from "react";
import { useFormikContext, Form, Field } from "formik";
export const RenderForm = ({ setGoForward, goForward }) => {
  const { values } = useFormikContext();
  console.log(values);
  const disabledBtn1 = values.name === "" || values.surname === "";
  return (
    <Form>
      {goForward ? (
        <div>
          <Field value={values.name} name={"name"} placeholder={"name"} />
          <Field
            value={values.surname}
            name={"surname"}
            placeholder={"surname"}
          />
          <button disabled={disabledBtn1} onClick={() => setGoForward(false)}>
            Ić dalej
          </button>
        </div>
      ) : (
        <div>
          <Field
            value={values.lastName}
            name={"lastName"}
            placeholder={"last name"}
          />
          <Field
            value={values.guguname}
            name={"guguname"}
            placeholder={"gu gu name"}
          />
          <button onClick={() => setGoForward(true)}>Ić dalej2</button>
        </div>
      )}
    </Form>
  );
};

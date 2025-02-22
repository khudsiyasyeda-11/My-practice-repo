import { useFormik } from "formik";
import { validationSchema } from "../App";
import React from "react";

const FormikYup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <div className="container p-5 bg-body-secondary">
      <form className="p-5" onSubmit={formik.handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input
          type="name"
          id="name"
          className="form-control mb-3"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && <div>{formik.errors.name}</div>}
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          className="form-control mb-3"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && <div>{formik.errors.email}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYup;

import React, { useState } from "react";
import { useForm } from "./useForm";

const Form2 = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="password"
        value={values.password}
        type="password"
        onChange={handleChange}
      />
    </div>
  );
};

export default Form2;

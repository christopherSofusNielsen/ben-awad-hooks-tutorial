import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";

const Form2 = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  //ComponentDidMount
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  //only call when password is updated
  useEffect(() => {
    console.log("render");
  }, [values.password]);

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

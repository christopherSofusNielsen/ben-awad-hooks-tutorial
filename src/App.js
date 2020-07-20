import React, { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import UseEffektForm from "./components/UseEffektForm";
import { useFetch } from "./components/useFetch";
const App = () => {
  const url = "http://numbersapi.com/43/trivia";
  const { data, loading } = useFetch(url);
  return <UseEffektForm />;
};

export default App;

import React, { useState } from "react";

const Form1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Form1;

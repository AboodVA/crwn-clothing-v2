import React, { useState } from "react";
import InputField from "../input-fied/InputField";
import "./SignInForm.scss";

const defaultSignInFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fields, setFields] = useState(defaultSignInFields);

  const { email, password } = fields;

  function changeFieldHandler(e) {
    const { type } = this;

    setFields((state) => {
      return {
        ...state,
        [type]: e.target.value,
      };
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="sign-in"
    >
      <div>
        <h1>Already have an account</h1>
        <p>Sign in with your email and password</p>
      </div>
      <InputField
        onChange={changeFieldHandler.bind({ type: "email" })}
        value={email}
        htmlFor="email"
        type="email"
        label="Email"
      />

      <InputField
        onChange={changeFieldHandler.bind({ type: "password" })}
        value={password}
        htmlFor="password"
        type="password"
        label="Password"
      />

      <div className="action-buttons">
        <button type="submit" className="sign-in-button">
          <span className="text">Sign In</span>
          <span>Sign In</span>
        </button>
        <button type="button" className="sign-in-button">
          <span className="text">Google</span>
          <span>Sign In</span>
        </button>
      </div>
    </form>
  );
};

export default SignInForm;

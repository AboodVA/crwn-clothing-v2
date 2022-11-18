import React, { useState } from "react";
import InputField from "../input-fied/InputField";
import "./signUpForm.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  function changeInputHandler(e) {
    const { field } = this;

    setFormFields((state) => {
      return {
        ...state,
        [field]: e.target.value,
      };
    });
  }

  const clearFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      clearFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Cannot create user, Email already in use");
      } else {
        console.log(`Error occured during user Creation ${error}`);
      }
    }
  };

  return (
    <form onSubmit={submitHandler} className="sign-up-container">
      <div className="title">
        <h1>Don't have an Account.</h1>
        <p>Sign up with your email and password</p>
      </div>
      <div className="inputs">
        <InputField
          onChange={changeInputHandler.bind({ field: "displayName" })}
          type="text"
          htmlFor="display-name"
          label="Display Name"
          value={displayName}
        />

        <InputField
          onChange={changeInputHandler.bind({ field: "email" })}
          type="email"
          htmlFor="email-up"
          label="Email"
          value={email}
        />
        <InputField
          onChange={changeInputHandler.bind({ field: "password" })}
          type="password"
          htmlFor="password-up"
          label="Password"
          value={password}
        />
        <InputField
          onChange={changeInputHandler.bind({ field: "confirmPassword" })}
          type="password"
          htmlFor="c-password-up"
          label="Confirm Password"
          value={confirmPassword}
        />
      </div>
      <div className="sign-up-b">
        <button type="submit">
          <span className="text">Sign up</span>
          <span>UP</span>
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;

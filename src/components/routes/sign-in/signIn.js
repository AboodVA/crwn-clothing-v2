import React from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./signIn.scss";

import SignInForm from "../../sign-in-form/SignInForm";
import SignUpForm from "../../sign-up-form/SignUpForm";

const SignIn = () => {
  const logGoogleUserHandler = async () => {
    const response = await signInWithGooglePopUp();
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-up-page">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;

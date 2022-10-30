import React from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUserHandler = async () => {
    const response = await signInWithGooglePopUp();
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUserHandler}>Sign in with google</button>
    </div>
  );
};

export default SignIn;

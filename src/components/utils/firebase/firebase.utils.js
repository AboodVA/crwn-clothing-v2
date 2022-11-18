import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxI3iBN3M50fb6ylTYE6Lo-THNiV5b_yo",
  authDomain: "cloth-shop-149fd.firebaseapp.com",
  projectId: "cloth-shop-149fd",
  storageBucket: "cloth-shop-149fd.appspot.com",
  messagingSenderId: "840578480579",
  appId: "1:840578480579:web:fa28cb2450c287df342576",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e) {
      console.log("Error creating the user", e.message);
    }
  }

  return userDocRef;

  // if (exists)
  //return ref

  //if does  not exist
  //create user
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

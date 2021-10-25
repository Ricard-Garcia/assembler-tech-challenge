import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_PROJECT_ID,
  REACT_APP_FB_STORAGE_BUCKET,
  REACT_APP_FB_MSG_SENDER_ID,
  REACT_APP_FB_APP_ID,
  REACT_APP_FB_MEASUREMENT_ID,
} = process.env;

// Setting firebase app configuration & initialize
const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  projectId: REACT_APP_FB_PROJECT_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MSG_SENDER_ID,
  appId: REACT_APP_FB_APP_ID,
  measurementId: REACT_APP_FB_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// Firebase functions

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export async function signIn(email, password) {
  const signInResponse = await signInWithEmailAndPassword(email, password);
  return signInResponse;
}

export function singUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }
  return auth.currentUser.getIdToken();
}

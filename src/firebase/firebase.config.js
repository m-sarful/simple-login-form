// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSu6PzdpEEyLYkJvBOMdWnk9KtceGnPRc",
  authDomain: "simple-login-page-3c737.firebaseapp.com",
  projectId: "simple-login-page-3c737",
  storageBucket: "simple-login-page-3c737.appspot.com",
  messagingSenderId: "312400480931",
  appId: "1:312400480931:web:1d39e119f3b5b30dafcd16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
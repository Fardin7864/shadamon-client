// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXxQ6J2wQh3uPiu4NTWTneBveKx92FxXY",
  authDomain: "shadamon.firebaseapp.com",
  projectId: "shadamon",
  storageBucket: "shadamon.appspot.com",
  messagingSenderId: "412572339719",
  appId: "1:412572339719:web:dc137769b487643c3424a2",
  measurementId: "G-QKB6X8RX18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
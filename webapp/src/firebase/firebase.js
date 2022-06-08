// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwHIqgRxcoL6uk-oaH2HmiFNxmDF6CGw8",
  authDomain: "lmuacm-webapp.firebaseapp.com",
  projectId: "lmuacm-webapp",
  storageBucket: "lmuacm-webapp.appspot.com",
  messagingSenderId: "207327897262",
  appId: "1:207327897262:web:1046c757c0c654c0746f3f",
  measurementId: "G-51NZZ756JD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

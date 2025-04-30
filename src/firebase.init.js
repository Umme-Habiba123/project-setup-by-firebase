// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// DANGER-----
const firebaseConfig = {
  apiKey: "AIzaSyCMQd95uMw1Y7omi9_qw1V6pzZzUUr-eJo",
  authDomain: "auth-integration-272be.firebaseapp.com",
  projectId: "auth-integration-272be",
  storageBucket: "auth-integration-272be.firebasestorage.app",
  messagingSenderId: "1041416552588",
  appId: "1:1041416552588:web:c204948044335027ed3ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service 
export const auth = getAuth(app);
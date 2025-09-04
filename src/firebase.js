// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD85ZudGvlQNoofZ7Hv7EKfzRcph_OcGM0",
  authDomain: "appquiz-939d5.firebaseapp.com",
  projectId: "appquiz-939d5",
  storageBucket: "appquiz-939d5.firebasestorage.app",
  messagingSenderId: "173498855838",
  appId: "1:173498855838:web:051b37454702fb5aa7668f",
  measurementId: "G-XJS078Z29H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

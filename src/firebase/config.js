import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfKo8wOZmdcDPi5eeeCOw0JVRmMMjGNx8",
  authDomain: "react-crud-firebase-30c87.firebaseapp.com",
  databaseURL: "https://react-crud-firebase-30c87-default-rtdb.firebaseio.com",
  projectId: "react-crud-firebase-30c87",
  storageBucket: "react-crud-firebase-30c87.appspot.com",
  messagingSenderId: "988773365355",
  appId: "1:988773365355:web:ab1d9be9308b7cb2b0e32e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

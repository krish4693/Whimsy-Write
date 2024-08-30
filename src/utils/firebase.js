// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogproject-831dc.firebaseapp.com",
  projectId: "blogproject-831dc",
  storageBucket: "blogproject-831dc.appspot.com",
  messagingSenderId: "449452573271",
  appId: "1:449452573271:web:9ed47569c5e1323de05912"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
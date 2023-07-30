// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT4LzMFOMyDbf34K704N7ohQx-sMSrbF8",
  authDomain: "realtor-clone-ca7a6.firebaseapp.com",
  projectId: "realtor-clone-ca7a6",
  storageBucket: "realtor-clone-ca7a6.appspot.com",
  messagingSenderId: "438853017373",
  appId: "1:438853017373:web:d6d05762839c836cab0bf4",
  measurementId: "G-TZTMPNR7SN",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqdLmKwmTygjQmSBiYZWjt9daiaPGDYM8",
  authDomain: "react-journalapp-267a0.firebaseapp.com",
  projectId: "react-journalapp-267a0",
  storageBucket: "react-journalapp-267a0.appspot.com",
  messagingSenderId: "896760359219",
  appId: "1:896760359219:web:0cf0887490c8e68712f646"
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

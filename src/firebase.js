// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore/lite";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBex--2LIPNOlq-UqffHp_KzOBs8yj7an0",
  authDomain: "dbgreydive.firebaseapp.com",
  projectId: "dbgreydive",
  storageBucket: "dbgreydive.appspot.com",
  messagingSenderId: "461868718723",
  appId: "1:461868718723:web:64b1aec6c82aed3c5359b6",
};
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD059YmR2bWpIt_eM_E8kQzMATPdCtRNtY",
  authDomain: "projetotdw-f3e61.firebaseapp.com",
  projectId: "projetotdw-f3e61",
  storageBucket: "projetotdw-f3e61.appspot.com",
  messagingSenderId: "285916136748",
  appId: "1:285916136748:web:cc09915ff5699dd36d9889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

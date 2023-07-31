// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpruy-ntIgUwaPCB-6NSNddR1ygb1zgbM",
  authDomain: "restaurant-menu-manager-1f22c.firebaseapp.com",
  projectId: "restaurant-menu-manager-1f22c",
  storageBucket: "restaurant-menu-manager-1f22c.appspot.com",
  messagingSenderId: "414704146788",
  appId: "1:414704146788:web:e814504a370ed3930f4271",
  measurementId: "G-P3366X2VL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

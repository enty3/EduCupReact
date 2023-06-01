// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyh6Is8-p9zrZZqnZJgvGhFcA_f9AETrk",
    authDomain: "educup-bca86.firebaseapp.com",
    projectId: "educup-bca86",
    storageBucket: "educup-bca86.appspot.com",
    messagingSenderId: "121917020214",
    appId: "1:121917020214:web:6c00e6f95fff3e417f2097",
    measurementId: "G-CBFKQCYB7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const auth = getAuth(app)
export {app, firestore, auth}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD80ct3ZDYVm_-rJGygeLw4maROwaeS9i8",
    authDomain: "ema-john-simple-11e3a.firebaseapp.com",
    projectId: "ema-john-simple-11e3a",
    storageBucket: "ema-john-simple-11e3a.appspot.com",
    messagingSenderId: "244653743825",
    appId: "1:244653743825:web:4d189442ed376412962ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
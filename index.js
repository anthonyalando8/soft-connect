// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiqXssNZrg3Ke0fB2QWY7iKVQgp3K3H_c",
  authDomain: "soft-connect-733db.firebaseapp.com",
  databaseURL: "https://soft-connect-733db-default-rtdb.firebaseio.com",
  projectId: "soft-connect-733db",
  storageBucket: "soft-connect-733db.appspot.com",
  messagingSenderId: "370743142953",
  appId: "1:370743142953:web:9340dd7c02a57392fc4a38",
  measurementId: "G-DYM4MTN4C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


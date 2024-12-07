// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrnWBkDxzrmy8xmc572QA_-3kigpAUK_8",
  authDomain: "assignment-10-6137f.firebaseapp.com",
  projectId: "assignment-10-6137f",
  storageBucket: "assignment-10-6137f.firebasestorage.app",
  messagingSenderId: "1040631940189",
  appId: "1:1040631940189:web:14613bd51d3755631439b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
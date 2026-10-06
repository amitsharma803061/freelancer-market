// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS3IHBpZfsWktigZk4DYFATrXnla9xQio",
  authDomain: "freelance-market-c65d6.firebaseapp.com",
  projectId: "freelance-market-c65d6",
  storageBucket: "freelance-market-c65d6.firebasestorage.app",
  messagingSenderId: "609220318048",
  appId: "1:609220318048:web:f3535d0c5537ff1843c405",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

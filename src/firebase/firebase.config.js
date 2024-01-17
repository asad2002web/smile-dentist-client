
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAE9I7v8HeAUphuIFCZiloblMWTMb5Qjk",
  authDomain: "smile-dentist-c98d9.firebaseapp.com",
  projectId: "smile-dentist-c98d9",
  storageBucket: "smile-dentist-c98d9.appspot.com",
  messagingSenderId: "817603472423",
  appId: "1:817603472423:web:cec339c1e3dc3fc43fb202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

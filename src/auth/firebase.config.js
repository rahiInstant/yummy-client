import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsISuV7WPHUA1fF63OxP7atYJHvacWUs8",
  authDomain: "recipe-net.firebaseapp.com",
  projectId: "recipe-net",
  storageBucket: "recipe-net.appspot.com",
  messagingSenderId: "185921107057",
  appId: "1:185921107057:web:d823070ce14c0c8ec4d7d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

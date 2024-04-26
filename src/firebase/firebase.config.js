// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5Rcs4GrrsLhDMD0Xhsen4M8JwX-VV7Y",
  authDomain: "m10m57-artcraft.firebaseapp.com",
  projectId: "m10m57-artcraft",
  storageBucket: "m10m57-artcraft.appspot.com",
  messagingSenderId: "182931737768",
  appId: "1:182931737768:web:90db1ae45fe85dfab6869d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
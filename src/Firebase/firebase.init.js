// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuxIDr5glkWXsnWTWV5rEzvl2oK0zK1vM",
  authDomain: "dimple-project-f21d5.firebaseapp.com",
  projectId: "dimple-project-f21d5",
  storageBucket: "dimple-project-f21d5.appspot.com",
  messagingSenderId: "828157138343",
  appId: "1:828157138343:web:8fd437b9fcb146d31a9282",
  measurementId: "G-CX7FNH7DYT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

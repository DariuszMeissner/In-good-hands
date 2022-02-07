// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvheC58J2WYK8279asi6peWzglOq6c2YU",
    authDomain: "in-good-hands-db402.firebaseapp.com",
    databaseURL: "https://in-good-hands-db402-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "in-good-hands-db402",
    storageBucket: "in-good-hands-db402.appspot.com",
    messagingSenderId: "259740767750",
    appId: "1:259740767750:web:a63e29097b33f839941587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-krNMar5LV7gHV2yXOvA3VbPFl25FdBU",
  authDomain: "expensetracker-f78ae.firebaseapp.com",
  projectId: "expensetracker-f78ae",
  storageBucket: "expensetracker-f78ae.appspot.com",
  messagingSenderId: "405889245135",
  appId: "1:405889245135:web:2fdd92ecef890572e77cba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

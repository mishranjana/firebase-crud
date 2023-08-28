import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAo8yz2uzj-Lqcv3pQ5jSRxWPSAEjMtv94",
    authDomain: "crud-35f80.firebaseapp.com",
    projectId: "crud-35f80",
    storageBucket: "crud-35f80.appspot.com",
    messagingSenderId: "585076388644",
    appId: "1:585076388644:web:6d3414bcfbaa7f493c39b1",
    measurementId: "G-6ZLKMXSH05"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
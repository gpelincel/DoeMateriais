// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAl-FPaHm8UCViD8I6luQTYv-ipk_PoKwg",
  authDomain: "doemateriais.firebaseapp.com",
  databaseURL: "https://doemateriais-default-rtdb.firebaseio.com",
  projectId: "doemateriais",
  storageBucket: "doemateriais.appspot.com",
  messagingSenderId: "435712530737",
  appId: "1:435712530737:web:17217efaea20dcdd6d7810"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
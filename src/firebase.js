import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO2pCnYDGa-08a6wYDG9-jNyw5WbS13cc",
  authDomain: "chat-app-f4c0b.firebaseapp.com",
  projectId: "chat-app-f4c0b",
  storageBucket: "chat-app-f4c0b.appspot.com",
  messagingSenderId: "532095657426",
  appId: "1:532095657426:web:c0bbebbc0ece030297140b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

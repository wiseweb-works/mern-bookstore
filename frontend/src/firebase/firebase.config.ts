import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env["VITE_API_KEY"],
  authDomain: import.meta.env["VITE_Auth_Domain"],
  projectId: import.meta.env["VITE_PROJECT_ID"],
  storageBucket: import.meta.env["VITE_STORAGE_BUCKET"],
  messagingSenderId: import.meta.env["VITE_MESSAGING_SENDERID"],
  appId: import.meta.env["VITE_APPID"],
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6oNMiTqk0Vi7XKxI5NzNhFPaLtJyxrXM",
  authDomain: "industry-planner.firebaseapp.com",
  projectId: "industry-planner",
  storageBucket: "industry-planner.appspot.com",
  messagingSenderId: "690257823516",
  appId: "1:690257823516:web:3763ce68f7840acbcadcd9",
  measurementId: "G-SNJSFVHT6F",
};

export const firebase = initializeApp(firebaseConfig);

export const firestore = initializeFirestore(firebase, {
  localCache: persistentLocalCache(),
});

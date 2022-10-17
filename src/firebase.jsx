import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyB16kjf1aDY5u9vKglC-v7toSpjMTnKwGM",
  authDomain: "auth-development-1bdb4.firebaseapp.com",
  projectId: "auth-development-1bdb4",
  storageBucket: "auth-development-1bdb4.appspot.com",
  messagingSenderId: "747061694982",
  appId: "1:747061694982:web:95070c0783cf19842b6987",
  measurementId: "G-GK9RXJNYMY"
  };

//initialize firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}


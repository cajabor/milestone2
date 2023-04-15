import React, { useState, useEffect, createContext } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4t8duUa14lzMRWk2TZIyvq_ae7F1NtkA",
    authDomain: "must-do-it-c5a54.firebaseapp.com",
    projectId: "must-do-it-c5a54",
    storageBucket: "must-do-it-c5a54.appspot.com",
    messagingSenderId: "934763446168",
    appId: "1:934763446168:web:78fb104e660310895035ed",
    measurementId: "G-81F5P98SV8"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

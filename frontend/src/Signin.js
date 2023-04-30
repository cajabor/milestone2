import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import './list_style.css';


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

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (isSigningUp) {
        await auth.createUserWithEmailAndPassword(email, password);
      } else {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    await auth.signOut();
  };

  if (user) {
    return (
      <div className="container">
        <h1>Welcome, {user.email}!</h1>
        <button onClick={handleSignOut} className="button">Sign out</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{isSigningUp ? "Sign up" : "Log in"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="button">
          {isSigningUp ? "Sign up" : "Log in"}
        </button>
      </form>
        <button onClick={() => setIsSigningUp(!isSigningUp)} className="button">
          {isSigningUp ? "Already have an account? Log in instead." : "Don't have an account? Sign up instead."}
        </button>
    </div>
  );
}

export default Signin;

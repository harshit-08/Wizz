import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import { auth } from './firebase'
import firebase from 'firebase'
import Login from './Components/Login'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const state = localStorage.getItem('loginState')
    setIsLoggedIn(JSON.parse(state))
  }, [])

  useEffect(() => {
    localStorage.setItem('loginState', JSON.stringify(isLoggedIn))
  })

  const logout = () => {

    auth.signOut()
      .then(() => {
        console.log('Sign - out successful');
        setIsLoggedIn(!isLoggedIn)

      })
      .catch((error) => {
        console.log(error);
      });
  }

  const loginHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        setIsLoggedIn(!isLoggedIn)
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong. Please try again")
      });
  }

  return (

    isLoggedIn ?
      <Dashboard logout={logout} />
      :
      <Login loginHandler={loginHandler} />
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './Views/LogIn/login'

function App() {
  const {auth} = useSelector(state => state)
    return (
      <>
        {!auth.LoggedIn ? <Login /> : <h1>Hello Dashboard</h1>}
      </>
    );
  }


export default App;

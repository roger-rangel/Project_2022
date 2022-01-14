/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Views/LogIn/login';

import NavContext from './Context/NavContext';

function App() {
  const { auth } = useSelector(state => state);
  const [nav, setNav] = useState(false)
  const value = {nav, setNav}
  
    return (
      <>
        {!auth.LoggedIn ? <Login /> :
          <div className='App'>
            <NavContext.Provider value={value} >
            <h1>Hello Dashboard</h1>
            </NavContext.Provider>
          </div>
        }
      </>
    );
  }


export default App;

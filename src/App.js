/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Views/LogIn/login';
import Navbar from './Views/Navbar/Navbar'
import Container from './Views/Container/Container';
import RightNavbar from './Views/RightNavbar/RigthNavBar';

import NewBug from './Views/Pages/NewBug/NewBug';
import Dashboard from './Views/Pages/Dashboard/Dashboard';


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
              <Navbar />
              <Container
                stickyNav={<RightNavbar />}
                content={
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path = "/NewBug" element = {<NewBug />} />
                  </Routes>
                }
              />
            </NavContext.Provider>
          </div>
        }
      </>
    );
  }


export default App;

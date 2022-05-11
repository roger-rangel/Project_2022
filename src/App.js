/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Views/LogIn/login';
import Navbar from './Views/Navbar/Navbar'
import Container from './Views/Container/Container';
import RightNavbar from './Views/RightNavbar/RigthNavBar';

// import NewBug from './Views/Pages/NewBug/NewBug';
import ViewBugs from './Views/Pages/ViewBugs/ViewBugs';
import Dashboard from './Views/Pages/Dashboard/Dashboard';
import Analytics from './Views/Pages/Analytics/Analytics';
import Campaigns from './Views/Pages/Campaigns/Campaigns';
import Team from './Views/Pages/Team/Team';

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
                    <Route path="*" element={<main>NOT FOUND</main>} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                    <Route path="/team" element={<Team />} />
                    <Route path = "/all-bugs" element = {<ViewBugs />} />
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

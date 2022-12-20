import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Calendar from './pages/CalendarPage/CalendarPage';
import LogInPage from './pages/LogInPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';



function App() {
  // DEFINE THE USER STATE:
  // const [user, setUser] = useState(null)
  // use empty object for now during testing
  const [user, setUser] = useState({})
  
  return (
    <div className="App">
      { user ?
      <>
        <Nav />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard/:userId" element={<Dashboard />} />
            <Route path="/calendar/:userId/" element={<Calendar />} />
          </Routes> 
      </>
      : 
        <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
        </Routes>
    }
      

    </div>
  );
}

export default App;

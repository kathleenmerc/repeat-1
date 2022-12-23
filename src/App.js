import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Calendar from './pages/CalendarPage/CalendarPage';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { getUser } from './utilities/users-service'




function App(props) {
  // DEFINE THE USER STATE:
  const [user, setUser] = useState(getUser())
  // use empty object for now during testing
  // const [user, setUser] = useState({})

  
  return (
    <div className="App">
      
      { user ?
      <>  
        <Nav setUser={setUser}/>
        <Routes>
            <Route path="/dashboard/:username" element={<Dashboard username={user.username} />} />
            <Route path="/calendar/:username" element={<Calendar />} />
          </Routes> 
      </>
      : 
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
        </Routes>
    }
      

    </div>
  );
}

export default App;

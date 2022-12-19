import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Homepage from './pages/Homepage/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Calendar from './pages/CalendarPage/CalendarPage'


function App() {
  // const [user, setUser] = useState(null)
  // look in week 11 day 2 for useState
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes> 
    </div>
  );
}

export default App;

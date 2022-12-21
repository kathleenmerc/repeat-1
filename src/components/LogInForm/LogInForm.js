import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LogInForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    // const handleChange = (evt) => {
    //     setUsername({ [evt.target.name] : evt.target.value})
    //     setPassword({[evt.target.name] : evt.target.value })
    //     setConfirmPassword({[evt.target.name] : evt.target.value})
    //     setError('')
    // }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        alert(JSON.stringify(username, password, confirmPassword))
    }


    const disable = password !== confirmPassword


    return (
        
        <div className="signUpForm">
            <form autoComplete="off" onSubmit={handleSubmit}>

                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={(evt) => setUsername(evt.target.value) } required />

                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} required />

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)} required />

                <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
            <Link to="/signup"><button>Don't have an account? Sign up here.</button></Link>

            <p className="error-message">{error}</p>
        </div>
        
    )
}
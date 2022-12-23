import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logInService } from '../../utilities/users-service'

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

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = { username, password }
            const user = await logInService(formData)
            props.setUser(user)
        } catch {
            setError('Log In Failed - Try Again')
        }
    }


    const disable = password !== confirmPassword


    return (
        
        <div className="logInForm">
            <form autoComplete="off" onSubmit={handleSubmit}>

                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={(evt) => setUsername(evt.target.value) } required />

                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} required />

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)} required />

                <button type="submit" disabled={disable}>LOG IN</button>
            </form>
            <Link to="/signup"><button>Don't have an account? Sign up here.</button></Link>

            <p className="error-message">{error}</p>
        </div>
        
    )
}
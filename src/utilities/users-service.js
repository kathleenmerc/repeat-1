// IMPORT ALL NAMED EXPORTS ATTACHED TO USERSAPI OBJECT:
import * as usersAPI from './users-api'

export async function signUpService(userData) {
    // Need to delegate the network request code to the users-api.js API module:
    const token = await usersAPI.signUpAPI(userData)

    // Save the token to localStorage:
    localStorage.setItem("token", token)
    return token
}

export function getToken() {
    // Retrieve token from localStorage:
    const token = localStorage.getItem("token")

    // Check if there is no token, then return user's state as null:
    if (!token) return null
    
    // Retrieve the token payload and parse into JSON object:
    const payload = JSON.parse(atob(token.split('.')[1]))

    // Check if the token has expired, then return user's state as null:
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        return null
    }

    // If passes both conditions above, then return the token:
    return token;
}

export function getUser () {
    // Retrieve the token from the getToken function:
    const token = getToken()

    // Once token is true, then return the data in the 'user' object from the payload:
    // If token is false, return null:
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}


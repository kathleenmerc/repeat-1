// IMPORT ALL NAMED EXPORTS ATTACHED TO USERSAPI OBJECT:
import * as usersAPI from './users-api'

export async function signUpService(userData) {
    // Need to delegate the network request code to the users-api.js API module:
    const token = await usersAPI.signUpAPI(userData)

    // Save the token to localStorage:
    localStorage.setItem("token", token)
    return token
}
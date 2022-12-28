import { getToken } from './users-service'

// BASE PATH FOR THE EXPRESS ROUTE:
const BASE_URL = '/api/users'

// REFACTORED CODE - SEE BELOW:
// export async function signUpAPI(userData) {
//     const res = await fetch(`${BASE_URL}/signup`, {
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         // res.json will resolve to the JWT
//         return res.json()
//     } else {
//         throw new Error('Invalid Sign Up')
//     }

// }

// export async function logInAPI(userData) {
//     const res = await fetch (`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error('Invalid Log In')
//     }
// }


export function signUpAPI(userData) {
    return sendRequest(`${BASE_URL}/signup`, 'POST', userData)
}

export function logInAPI(userData) {
    return sendRequest(`${BASE_URL}/login`,'POST', userData)
}

export function checkTokenAPI() {
    return sendRequest(`${BASE_URL}/check-token`)
}

// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', payload = null) {
    const options = { method }
    if (payload) {
        options.headers = { 'Content-Type' : 'application/json' }
        options.body = JSON.stringify(payload)
    }

    const token = getToken()
    if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }

    const res = await fetch(url, options)
    if (res.ok) return res.json
    throw new Error('Bad Request')
}


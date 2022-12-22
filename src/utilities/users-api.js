// BASE PATH FOR THE EXPRESS ROUTE:
const BASE_URL = '/api/users'


export async function signUpAPI(userData) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(userData)
    })

    if (res.ok) {
        // res.json will resolve to the JWT
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }

}
/**
 * Utility modules: Modules that hold general purpose functions, for example, a formatTime(seconds)function. These modules are reusable in multiple projects.
 * Service modules: Service modules are where we can organize application specific logic such as functions for signing-up or logging in a user. Service modules often use and depend upon API modules.
 * API modules: API modules are for abstracting logic that make network requests such as AJAX calls to the backend or third-party APIs. This abstraction makes it easier to refactor code to use different techniques, libraries, etc. For example, we are going to be using fetch for our AJAX communications, however, refactoring to use a library such as Axios would be made easy thanks to the use of API modules.
 */

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
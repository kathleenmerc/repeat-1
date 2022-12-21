/**
 * Utility modules: Modules that hold general purpose functions, for example, a formatTime(seconds)function. These modules are reusable in multiple projects.
 * Service modules: Service modules are where we can organize application specific logic such as functions for signing-up or logging in a user. Service modules often use and depend upon API modules.
 * API modules: API modules are for abstracting logic that make network requests such as AJAX calls to the backend or third-party APIs. This abstraction makes it easier to refactor code to use different techniques, libraries, etc. For example, we are going to be using fetch for our AJAX communications, however, refactoring to use a library such as Axios would be made easy thanks to the use of API modules.
 */

// IMPORT ALL NAMED EXPORTS ATTACHED TO USERSAPI OBJECT (from utilities/users-api.js):
import * as usersAPI from './users-api'

export async function signUpService(userData) {
    // Need to delegate the network request code to the users-api.js API module, which will ultimately return a JSON Wed Token (JWT)
    const token = await usersAPI.signUpAPI(userData)

    // for now, return what the server is sending back
    return token
}
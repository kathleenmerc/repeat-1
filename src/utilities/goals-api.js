const BASE_URL = '/api/goals'

export function addGoalAPI(goalData) {
    return sendRequest(`${BASE_URL}/add-goal`, 'POST', goalData)
}

// HELPER FUNCTIONS:
async function sendRequest (url, method = 'GET', payload = null) {

    // If the request has payload, then add headers and body in the response:
    const options = { method }
    if (payload) {
        options.headers = { 'Content-Type' : 'application/json' }
        options.body = JSON.stringify(payload)
    }

    // First fetch, then if the response is good, then return res.json:
    const res = await fetch(url, options)
    if (res.ok) return res.json
    throw new Error('Bad Request')
}


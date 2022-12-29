import * as goalsAPI from './goals-api'

export async function addGoal (goalData) {
    const goal = await goalsAPI.addGoalAPI(goalData)
    return goal
}
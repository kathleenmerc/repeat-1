import React, { useState } from 'react'
import GoalForm from '../GoalForm/GoalForm'
//import GoalItem from '../GoalItem/GoalItem'




export default function GoalsList ({ goals }) {
    const [list, setList] = useState([])

    const addNewGoal = (goal) => {
        const newList = [goal, ...list]
        setList(newList)
    }


    return(
        <div className='goals-list'>
            <GoalForm onSubmit={addNewGoal} />
            {/* <GoalItem goals={goals}/> */}
        </div>
    )
}
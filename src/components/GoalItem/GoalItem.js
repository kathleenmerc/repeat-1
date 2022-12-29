import React, { useState } from 'react'
import GoalForm from '../GoalForm/GoalForm'

export default function GoalItem({ goals }) {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    })
  return (
    <div className='goal-item'>
        <ul>
            {goals.map((goal, index) => {
                return(
                    <li key={index}>
                        {goal.goalLine}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
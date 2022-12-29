import React, { useState } from 'react'
import { addGoal } from '../../utilities/goals-service'
//import { setGoal } from '../../App'

export default function GoalForm(props) {

    const [goalLine, setGoalLine] = useState('')
    const [sunday, setSunday] = useState(false)
    const [monday, setMonday] = useState(false)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(false)
    const [friday, setFriday] = useState(false)
    const [saturday, setSaturday] = useState(false)
    

    // const handleChange = (evt) => {
    //     setInput({...input, [evt.target.name] : evt.target.value })
    //     alert(JSON.stringify(input))
    // }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const goalData = { goalLine, sunday, monday, tuesday, wednesday, thursday, friday, saturday }
            const goal = await addGoal(goalData)
            console.log(goal)
            //setGoal(goal)

        } catch (err) {
            alert(err)
        }



    }


 

    return (
        
        <div className="goal-form">
            <form onSubmit={handleSubmit}>

                <label>Goal:</label>
                <input type="text" name="goalName" value={goalLine} onChange={(evt) => setGoalLine(evt.target.value)} required />

                <label>Sun:</label>
                <input type="checkbox" name="sunday" value={sunday} onChange={(evt) => setSunday(evt.target.value)} />

                <label>M:</label>
                <input type="checkbox" name="=monday" value={monday} onChange={(evt) => setMonday(evt.target.value)} />
                
                <label>Tu:</label>
                <input type="checkbox" name="tuesday" value={tuesday} onChange={(evt) => setTuesday(evt.target.value)} />

                <label>W:</label>
                <input type="checkbox" name="wednesday" value={wednesday} onChange={(evt) => setWednesday(evt.target.value)} />
                <label>Th:</label>
                <input type="checkbox" name="thursday" value={thursday} onChange={(evt) => setThursday(evt.target.value)} />

                <label>F:</label>
                <input type="checkbox" name="friday" value={friday} onChange={(evt) => setFriday(evt.target.value)} />

                <label>Sat:</label>
                <input type="checkbox" name="saturday" value={saturday} onChange={(evt) => setSaturday(evt.target.value)} />

                

                <button type="add">add goal</button>
            </form>
        </div>
        
    )
}
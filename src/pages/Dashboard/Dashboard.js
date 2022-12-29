import GoalsList from '../../components/GoalsList/GoalsList'
import { checkToken } from '../../utilities/users-service'

export default function Dashboard (props) {

    const handleCheckToken = async () => {
        try {
            const expDate = await checkToken()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="dashboard">
            <h1>dashboard</h1>
            <h1>Welcome {props.username}!</h1>
            <button onClick={handleCheckToken}>Check for expiration</button>
            <GoalsList />
        </div>
    )
}
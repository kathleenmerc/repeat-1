import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'


export default function Nav (props) {

    function handleLogOut () {
        userService.logOut()
        props.setUser(null)
    }

    return (
        <nav>
            <Link to='/dashboard/:username'>Dashboard</Link>
            <Link to='/calendar/:username'>Calendar</Link>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>

    )
}
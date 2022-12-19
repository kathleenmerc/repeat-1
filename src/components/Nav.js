import { Link } from 'react-router-dom'

export default function Nav (props) {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/calendar'>Calendar</Link>
        </nav>

    )
}
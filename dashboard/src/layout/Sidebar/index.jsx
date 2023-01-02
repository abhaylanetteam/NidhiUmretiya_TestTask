import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar_main">
                <div className="sidebar_logo">
                    <h1>Logo</h1>
                </div>
                <div className="sidebar_main_menu">
                    <ul>
                        <li><Link to={'/'}>Dashboard</Link></li>
                        <li><Link to={'/students'}>Students</Link></li>
                        <li><Link to={'/departments'}>Departments</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
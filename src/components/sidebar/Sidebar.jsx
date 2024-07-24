import "./Sidebar.css"
import menu from "../../../public/img/Vector.png"
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__list--active">
                <button className="sidebar__list-button"><img src={menu} alt=""/></button>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <Link to={'/catalog'}>Flowers catalog</Link>
                    </li>
                    <li className="sidebar__list-item">
                        <Link to={'/promotions'}>Promotions</Link>
                    </li>
                    <li className="sidebar__list-item">
                        <Link to={"/"}>Home page</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar

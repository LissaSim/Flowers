import "./Nav.css";
import logo from "../../../public/img/logo.png";
import bag from "../../../public/img/bag.png";
import activeBag from "../../../public/img/activeCart.png"
import search from "../../../public/img/search.png";
import user from "../../../public/img/user.png"
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {findFlowers} from "../reducers/flowersSlice.js";

const Nav = () => {
    const {cartIcon} = useSelector(state => state.cart);
    const [input, setInput] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const showInput = () => {
        setInputVisible(true)
    }
    const inputNavigate = (e) => {
        // let key = e.keyCode;
        // if(key === 13) {
        //     <NavLink to={'catalog'}/>
        // }

        setInput(e);
        dispatch(findFlowers(e))
    };
    const catalogNavigate = (e) => {
        if(e.keyCode === 13){
            navigate(`/catalog`)
            // return(
            //     <NavLink to={'/catalog'}/>
            // )
        }
        setInput('')
    }
    return(
        <div className="nav__container">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-row">
                <ul className="nav-list">
                    <div className="nav-list__buttons">
                        <li className="nav-list__item">
                            <button className="nav-list-button" onClick={showInput}>
                                {inputVisible ?
                                    <input placeholder="Find..."
                                              className="nav-list__input"
                                              // onChange={(event) => setInput(event.target.value)}
                                              onChange={(event) => inputNavigate(event.target.value)}
                                              onKeyDown={(event) => catalogNavigate(event)}/>
                                : <img src={search} alt=""/>}
                            </button>
                        </li>
                        <li className="nav-list__item">
                            <Link to={"/order"}>
                                {cartIcon ? <button className="nav-list-button"><img src={activeBag} alt=""/></button> :
                                    <button className="nav-list-button"><img src={bag} alt=""/></button>}
                            </Link>
                        </li>
                    </div>
                    <li className="nav-list__item">
                        <button className="nav-list-button"><img src={user} alt=""/></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
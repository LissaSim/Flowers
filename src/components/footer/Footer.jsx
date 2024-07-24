import "./Footer.css";
import logo from "../../../public/img/logo.png"
import instagram from "../../../public/img/instagram.png"
import telegram from "../../../public/img/telegram.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__container">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="footer__icons">
                    <button className="nav-list-button"><img src={instagram} alt=""/></button>
                    <button className="nav-list-button"><img src={telegram} alt=""/></button>
                </div>
                <h3 className="footer__number">+38 000 000 00 00</h3>
            </div>
        </div>
    )
}

export default Footer
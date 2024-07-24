
import "./HomePage.css"
import arrow from "../../../public/img/arrowDown.png"
import cartIcon from "../../../public/img/bag.png"
import {useEffect, useMemo, useState} from "react";
import {useHttp} from "../../hooks/http.js";
import {useDispatch, useSelector} from "react-redux";
import { fetchFlowers} from "../reducers/flowersSlice.js";
import {addItem} from "../reducers/cartSlice.js"
import {findFlowers} from "../reducers/flowersSlice.js"
import {Link, NavLink} from "react-router-dom";

const HomePage = () => {
    const [visibleFlowers, setVisibleFlowers] = useState(false);
    const [visibleSale, setVisibleSale] = useState(false);
    const toggleFlowers = () => {
        setVisibleFlowers(!visibleFlowers);
    }
    const toggleSale = () => {
        setVisibleSale(!visibleSale)
    }

    // const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchFlowers())
    }, []);

    const {flowers,value} = useSelector(state => state.flowers);

    const flowersCard = useMemo(() => {
        if (!flowers || !flowers.length) return null;
        return flowers.slice(0, 2).map(flower => (
            <div key={flower.id} className="homepage__popular-card">
                <img src={flower.img} alt=""/>
                <div className="homepage__popular-descr">
                    <h3 className="homepage__popular-descr-title">{flower.title}</h3>
                    <span className="homepage__popular-descr-text">
                        <h4 className="homepage__popular-descr-title">{flower.size}</h4>
                        <h4 className="homepage__popular-descr-title"><em>{flower.price}</em> $</h4>
                    </span>
                </div>
                <button className="homepage__popular-button" onClick={() => dispatch(addItem(flower))}>
                    <span className="homepage__popular-button-text">Add to cart</span>
                    <img src={cartIcon} alt=""/>
                </button>
            </div>
        ));
    }, [flowers]);

    return (
        <div className="homepage-container">
            <div className="homepage">
                <div className="homepage__form">
                    <h3 className="homepage__form-text">What do you looking for?</h3>
                    <div className="homepage__form-list">
                        <button className="homepage__form-button" type="button" onClick={toggleFlowers}>
                            <span>Choose flowers</span>
                            <img src={arrow} alt=""/>
                        </button>
                        {/*add active*/}
                        <ul className={`homepage__list ${visibleFlowers ? 'active' : ''}`}>
                            <NavLink to={"/catalog"}>
                                <li className="homepage__list-item" onClick={ () => dispatch(findFlowers("Roses"))}>Roses</li>
                                <li className="homepage__list-item" onClick={ () => dispatch(findFlowers("Peonies"))}>Peonies</li>
                                <li className="homepage__list-item" onClick={ () => dispatch(findFlowers("Tulips"))}>Tulips</li>
                                <li className="homepage__list-item" onClick={ () => dispatch(findFlowers("Composition"))}>Composition</li>
                            </NavLink>
                        </ul>
                    </div>

                    <h3 className="homepage__form-text">or</h3>

                    <div className="homepage__form-list">
                        <button className="homepage__form-button" type="button" onClick={toggleSale}>
                            <span>View promotion</span>
                            <img src={arrow} alt=""/>
                        </button>
                        <ul className={`homepage__list ${visibleSale ? "active": ""}`}>
                            <Link to={'/promotions'}>
                                <li className="homepage__list-item">Sale of the week</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="homepage__text-group">
                    <h3 className="homepage__form-title">With love for each client</h3>
                    <h3 className="homepage__form-title">fast delivery</h3>
                    <h3 className="homepage__form-title">fresh flowers</h3>
                </div>

                <h2 className="homepage__form-text">Popular</h2>
                <div className="homepage__popular">
                    {flowersCard}
                </div>
                <div className="homepage__text">
                    <h2 className="homepage__form-text">Who is Flowers House?</h2>
                    <h3 className="homepage__text-title">
                        Introducing Flowers House - where floral dreams come to life! 🌸
                        At Flowers House, we're passionate about flowers and the joy they bring to every occasion. From elegant bouquets to charming arrangements, our talented team crafts each creation with love and care, ensuring that every petal is perfect.
                        With a wide selection of fresh blooms sourced from local growers, we offer something for every taste and style. Whether you're celebrating a special milestone, expressing your love, or simply brightening someone's day, our flowers are sure to make a lasting impression.
                        Experience the beauty of nature with Flowers House. Order online or visit our store today! 🌼
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

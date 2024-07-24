import "./PromotionPage.css";
import { addItem } from "../reducers/cartSlice.js";
import {addSale, fetchFlowers} from "../reducers/flowersSlice.js";
import cartIcon from "../../../public/img/bag.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PromotionPage = () => {
    const dispatch = useDispatch();

    const flowersPromotion = useSelector(state => state.flowers.promotionFlowers);

    useEffect(() => {
        dispatch(fetchFlowers())
    }, []);

    useEffect(() => {
        dispatch(addSale());
    }, [dispatch]);

    const renderContent = (arr) => {
        return (
            arr.map(({ id, img, title, size, price, discountPrice }) => (
                <div className="promotion__card" key={id}>
                    <div className="round"><h4>-15%</h4></div>
                    <img src={img} alt=""/>
                    <div className="promotion__card-descr">
                        <h3 className="promotion__card-title">{title}</h3>
                        <span className="promotion__card-text">
                            <h4 className="promotion__card-title">{size}</h4>
                           <div className="discount">
                                <h4 className="promotion__card-title"><em className="discount__price">{discountPrice}<em>$</em></em></h4>
                            <h4 className="promotion__card-title"><em className="price">{price}$</em></h4>
                           </div>
                        </span>
                    </div>
                    <button className="homepage__popular-button" onClick={() => dispatch(addItem({ id,img, title, size, price, discountPrice}))}>
                        <span className="homepage__popular-button-text">Add to cart</span>
                        <img src={cartIcon} alt=""/>
                    </button>
                </div>
            ))
        );
    };

    const content = renderContent(flowersPromotion);

    return (
        <div className="promotion__wrapper">
            <div className="promotion__content">
                {content}
            </div>
        </div>
    );
}

export default PromotionPage;

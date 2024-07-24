import React from 'react';
import './OrderPage.css';
import cartIcon from '../../../public/img/bag.png';
import trash from "../../../public/img/iconoir_trash.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, incItemQuantity, decItemQuantity } from "../reducers/cartSlice.js";

const OrderPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);

    const createOrder = (arr) => {
        return arr.map((item, id) => (
            <div className="order__card" key={id}>
                <img src={item.img} alt="bouquet of spray roses"/>
                <div className="catalog__card-descr">
                    <h3 className="catalog__card-title">{item.title}</h3>
                    <span className="catalog__card-text">
                        <h4 className="catalog__card-title">{item.size}</h4>
                        {item.discountPrice ? (
                            <h4 className="catalog__card-title">
                                <em>{item.discountPrice}</em> $
                            </h4>
                        ) : (
                            <h4 className="catalog__card-title">
                                <em>{item.price}</em> $
                            </h4>
                        )}
                    </span>
                </div>
                <div className="order__button-group">
                    <div className="order__btns">
                        <div className="order__button">
                            <button className="order__button__plus" onClick={() => dispatch(incItemQuantity(item.id))}>+</button>
                            <span>{item.quantity}</span>
                            <button className="order__button__minus" onClick={() => dispatch(decItemQuantity(item.id))}>-</button>
                        </div>
                        <button className="delete-button" onClick={() => dispatch(deleteItem(item.id))}>
                            <img src={trash} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    const element = createOrder(cart);
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.discountPrice || item.price) * item.quantity, 0);
    const delivery = 7;

    const createPage = (arr) => {
        if (arr.length > 0) {
            return (
                <>
                    <h3 className="order__text">Your order <img src={cartIcon} alt="cart"/></h3>
                    <div className="order__cart">
                        {element}
                    </div>
                    <div className="order__summary">
                        <p>{cart.length} product amount: <span>{totalPrice} <em>$</em></span></p>
                        <p className="order__summary-delivery">Delivery: <span>{delivery} <em>$</em></span></p>
                        <p>Total: <span>{totalPrice + delivery} <em>$</em></span></p>
                    </div>
                    <div className="order__card-data">
                        <h3 className="order__summary-text">Your data:</h3>
                        <input className="order__data" placeholder="Name *"/>
                        <input className="order__data" placeholder="Phone *"/>
                    </div>
                    <div className="order__card-data">
                        <h3 className="order__summary-text">Recipient data:</h3>
                        <input className="order__data" placeholder="Name *"/>
                        <input className="order__data" placeholder="Phone *"/>
                    </div>
                    <div className="order__card-data">
                        <h3 className="order__summary-text">Delivery:</h3>
                        <ul className="order__list">
                            <li className="order__list-item"><h3> Courier<input type="checkbox"/></h3></li>
                            <li className="order__list-item"><h3> Pick up<input type="checkbox"/></h3></li>
                        </ul>
                        <input className="order__data" placeholder="Street"/>
                        <input className="order__data" placeholder="House"/>
                        <input className="order__data" placeholder="Flat"/>
                        <input className="order__data" placeholder="Date"/>
                        <input className="order__data" placeholder="Delivery time"/>
                    </div>
                    <div className="order__summary-confirm">
                        <h3 className="order__summary-text">Payment:</h3>
                        <h3 className="order__data-pay"> Online<input type="checkbox"/></h3>
                        <button className="order__summary-button">
                            <span>Confirm</span>
                        </button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <h3 className="order__text">Your cart is empty</h3>
                </>
            );
        }
    };

    const order = createPage(cart);

    return (
        <div className="order">
            {order}
        </div>
    );
};

export default OrderPage;

import React from "react";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = ({ handleClose }) => {
    let total = 10;
    const onCheckoutClick = () => {
        console.log('checkout');
    }

    return (
        <div className="cart">
            <div className="scrollable">
                <h4>Shopping cart</h4>
                <ul className="cart-products-list">
                    <li >
                        <CartItem handleClose={handleClose} product={{ id: 1, title: 'Test', price: 10, productsInCart: { quantity: 3 } }} />
                    </li>
                </ul>
            </div>
            <div className="checkout-section">
                <div className="total">
                    <span className="label">Total: </span>
                    <b>$ {total}</b>
                </div>
                <button className="buy-button" onClick={onCheckoutClick}>Checkout</button>
            </div>
        </div>
    )
}

const CartItem = ({ product, handleClose }) => {
    return (
        <>
            <div className="product-info">
                <div className="details">
                    <span className="brand">{product.brand}</span>
                    <Link
                        to={`/product/${product.id}`}
                        className="name"
                        onClick={handleClose}
                    >
                        {product.title}
                    </Link>
                    <div className="quantity">
                        {product.productsInCart?.quantity}
                    </div>
                </div>
                <div className="button-delete">
                    <button onClick={() => console.log("remove from cart")}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div className="total">
                <span className="label">Total: </span>
                <b>${product.price * product.productsInCart?.quantity}</b>
            </div>
        </>
    )
}

export default Cart;
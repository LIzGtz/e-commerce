import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartThunk, removeFromCartThunk } from "../../store/slices/cart.slice";
import './Cart.css'

const Cart = ({ handleClose }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [dispatch]);

    const cart = useSelector(state => state.cart);

    const onCheckoutClick = () => {
        console.log('checkout');
    }

    let total = 0;
    total = cart?.products?.reduce((actual, current) => {
        if (typeof actual !== 'number') {
            return (+actual.price * actual.productsInCart?.quantity) + (+current.price * current.productsInCart?.quantity);
        }
        return actual + (current.productsInCart?.quantity * +current.price);
    });
    return (
        <div className="cart">
            <div className="scrollable">
                <h4>Shopping cart</h4>
                <ul className="cart-products-list">
                    {
                        cart?.products?.map(product => {
                            return (
                                <li key={product.id}>
                                    <CartItem key={product.id} handleClose={handleClose} product={product} />
                                </li>
                            )
                        })
                    }
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeFromCartClick = () => {
        if (sessionStorage.getItem('login.token')) {
            dispatch(removeFromCartThunk(product.id));
        } else {
            navigate("/login");
        }
    }

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
                    <button onClick={removeFromCartClick}>
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
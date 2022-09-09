import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addToCartThunk } from '../../store/slices/cart.slice';
import './ProductCard.css'

const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const onAddToCartClick = () => {
        if (sessionStorage.getItem('login.token')) {
            dispatch(addToCartThunk(product.id, 1));
        } else {
            navigate("/login");
        }
    }

    return (
        <div className='product-container'>
            <article className='product-card'>
                <Link to={`/product/${product?.id}`}>
                    <div className='image'>
                        <img src={product.productImgs[0]} alt="" />
                    </div>
                    <div className='contents'>
                        <h3>{product.title}</h3>
                        <span className='price-label'>Price</span>
                        <span className='price-value'>${product.price}</span>
                    </div>
                </Link>
                <button className='add-cart-button' onClick={onAddToCartClick}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </article>
        </div>
    )
}

export default ProductCard
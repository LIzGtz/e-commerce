import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartThunk } from '../../store/slices/cart.slice'
import History from '../shared/History'
import ProductCard from './ProductCard'
import './ProductDescription.css'

const ProductDescription = ({ productInfo, similarProducts }) => {
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch();
    // const products = useSelector(state => state.products);

    // useEffect(() => {
    //     if (productInfo) {
    //         dispatch(getAllProducts(productInfo.category?.id))
    //     }
    // }, [productInfo])

    const handlePlus = () => setCounter(counter + 1)

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const addToCartClick = () => {
        if (sessionStorage.getItem('login.token')) {
            dispatch(addToCartThunk(productInfo.id, counter));
        } else {
            navigate("/login");
        }
    }

    return (
        <article className='product-detail main-container'>
            <History currentPage={productInfo?.title} />
            <section className='product-info-flex'>
                <section className='product-images'>
                    <img src={productInfo?.productImgs[0]} />
                </section>
                <section className='product-info'>
                    <h2 className='name'>{productInfo?.title}</h2>
                    <p className='description'>{productInfo?.description}</p>
                    <div className='options'>
                        <div className='price'>
                            <span className='label'>Price</span>
                            <span className='value'>${productInfo?.price}</span>
                        </div>
                        <div className='quantity'>
                            <span className='label'>Quantity</span>
                            <div className='flex'>
                                <button disabled={counter == 1} onClick={handleMinus}>
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <div className='value'>{counter}</div>
                                <button onClick={handlePlus}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className='add-cart-button' onClick={addToCartClick}>
                        Add to Cart&nbsp;
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    
                </section>
            </section>
            <section className='product-suggestions'>
                <strong>Discover similar items</strong>
                <div className='product-list'>
                    {
                        similarProducts?.map(product => {
                            return (
                                <ProductCard 
                                    key={product.id}
                                    product={product}
                                ></ProductCard>
                            )
                        })
                    }
                </div>
            </section>
        </article>
    )
}

export default ProductDescription
import React, { useState } from 'react'
import History from '../shared/History'
import './ProductDescription.css'

const ProductDescription = ({ productInfo }) => {
    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
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
                    <button className='add-cart-button'>
                        Add to Cart&nbsp;
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    
                </section>
            </section>
        </article>
    )
}

export default ProductDescription
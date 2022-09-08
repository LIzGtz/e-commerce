import React, { useState } from 'react'

const ProductDescription = ({ productInfo }) => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }



    return (
        <section className='product-info'>
            <h2 className='product-info_name'>{productInfo?.tittle}</h2>
            <p className='product-info_description'>{productInfo?.description}</p>
            <div className='product-info_body'>
                <article className='product-info_price'>
                    <span className='product-info_price-value'>{productInfo?.price}</span>
                </article>
                <article className='product-info_quantity'>
                    <h3 className='product-info_quantity'>Quantity</h3>
                    <div className='product_info_quantity'>
                        <button onClick={handleMinus}>-</button>
                        <div>{counter}</div>
                        <button onClick={handlePlus}>+</button>
                    </div>

                </article>

            </div>
        </section>
    )
}

export default ProductDescription
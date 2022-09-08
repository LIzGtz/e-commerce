import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({product}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

  return (
   <article onClick={handleClick} className='card-home'>
    <header className='card-home_header'>
        <img className='card-home_img' src={product.productImgs[0]} alt="" />
    </header>
    <div className='card-home_body'>
        <h3 className='card-home_name'>{product.title}</h3>
        <section className='card-home_price'>
            <h4 className='card-home_price-label'>Price</h4>
            <span className='card-home_price-value'>{product.price}</span>
        </section>
        <button className='card-home_btn'>
        <i className ="fa-solid fa-cart-shopping"></i>
        </button>
    </div>
   </article>
  )
}

export default CardHome
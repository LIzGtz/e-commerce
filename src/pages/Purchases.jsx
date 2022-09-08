import React from 'react'
import './Purchases.css'

export const Purchases = () => {
  return (
    <div className='content'>
      <section className='main-container purchases'>
        <div className='history'>
          <a href='#/'>Home</a>
          <div className='separator'></div>
          <b>Purchases</b>
        </div>
        <h2>My purchases</h2>
        <div className='purchase-item'>
          <div className='header'>
            <b>September 7, 2022</b>
          </div>
          <ul className='purchase-products-list'>
            <li className='product-item'>
              <div className='image'></div>
              <div className='name'>Phone</div>
              <div className='quantity'>
                <div className='box'>1</div>
              </div>
              <div className='price'>$ 500.00</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import ProductCard from '../components/product/ProductCard'
import './Home.css'
import Filters from '../components/home/Filters'

export const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
    console.log(products)
  }, [])


  const onSearchFieldChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className='content'>
      <div className='home'>
        <div className='product-filter'>
          <div className='fixed'>
            <Filters />
          </div>
        </div>
        <div className='main-container'>
          <div className='search-box'>
            <form>
              <input
                type='text'
                placeholder='What are you looking for?'
                value={searchValue}
                onChange={onSearchFieldChange}
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div className='product-list'>
            {
              products?.map(product => {
                return (<ProductCard
                  key={product.id}
                  product={product}
                />)
              })
            }

          </div>
        </div>

      </div>

    </div>

  )
}

export default Home


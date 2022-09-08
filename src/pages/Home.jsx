import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import CardHome from '../components/home/CardHome'
import './Home.css'
import Filters from '../components/home/Filters'

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())

  }, [])

  const products = useSelector(state => state.products)


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
              <input type='text' placeholder='What are you looking for?' value=''></input>
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
        <div className='home__container-card'>
          {
            products?.map(product => {
              <CardHome
                key={product.id}
                product={product}
              />
            })
          }

        </div>

      </div>

    </div>

  )
}

export default Home


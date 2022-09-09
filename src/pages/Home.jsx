import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import ProductCard from '../components/product/ProductCard'
import './Home.css'
import Filters from '../components/home/Filters'
import { useForm } from 'react-hook-form'

export const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts({}))
    console.log(products)
  }, [])


  const onSearchFieldChange = (e) => {
    setSearchValue(e.target.value);
  }

  const search = (data) => {
    dispatch(getAllProducts({ filter: data.search }));
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
            <form onSubmit={handleSubmit(search)}>
              <input
                type='text'
                id='search'
                name='search'
                placeholder='What are you looking for?'
                {...register("search")}
              />
              <button type='submit'>
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


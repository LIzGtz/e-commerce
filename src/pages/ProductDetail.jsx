import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDescription from '../components/product/ProductDescription'
import { getAllProducts } from '../store/slices/products.slice'

export const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState()
  const [similarProducts, setSimilarProducts] = useState()
  const { id } = useParams()
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)

  useEffect(() => {
    if (products) {
      const product = products.find(p => p.id === +id)
      // dispatch(getAllProducts(product.category.id))
      const similarProducts = products.filter(p => p.category.id === product?.category.id)
      setProductInfo(product)
      setSimilarProducts(similarProducts)
    }
  }, [id, dispatch, products]);

  useEffect(() => {
    dispatch(getAllProducts())
    // console.log(products)
  }, [dispatch])
  // useEffect(() => {
  //   const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
  //   axios.get(URL)
  //     .then(res => setProductInfo(res.data.data.product))
  //     .catch(err => console.log(err))
  // }, [])

  // console.log(productInfo)
    // productInfo={productInfo}

  return (
    <div className='content'>
      <ProductDescription
        productInfo={productInfo} 
        similarProducts={similarProducts}
        />
    </div>
  )
}

export default ProductDetail


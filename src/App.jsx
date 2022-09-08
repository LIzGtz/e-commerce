import Header from './components/shared/Header'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/routes/Home'
import { Login } from './components/routes/Login'
import { ProductDetail } from './components/routes/ProductDetail'
import { Purchases } from './components/routes/Purchases'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: '',
  //     phone: '',
  //     role: '',

  //   }
  // axios.post()
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // }, [])

  // useEffect(

  // )

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App

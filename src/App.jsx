import Header from './components/shared/Header'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ProductDetail } from './pages/ProductDetail'
import { Purchases } from './pages/Purchases'
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
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={sessionStorage.getItem('login.token') ? <Outlet /> : <Navigate to="/login" />}>
          <Route path='/purchases' element={<Purchases />} />
          
        </Route>
      </Routes>
    </div>
  )
}

export default App

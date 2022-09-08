import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/routes/Home'
import { Login } from './components/routes/Login'
import { ProductDetail } from './components/routes/ProductDetail' 
import { Purchases } from './components/routes/Purchases'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/purchases' element={<Purchases />} />
      <Route path='/product/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default App

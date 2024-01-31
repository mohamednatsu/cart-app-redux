import React from 'react'
import Navbars from './components/Navbars'
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
const App = () => {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App

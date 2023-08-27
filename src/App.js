import React from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import Home from './pages/Home'
import Login from './pages/account/Login'
import Footer from './components/layout/Footer'
import Register from './pages/account/Register'
import Reset from './pages/account/Reset'
import { Routes, Route, useLocation } from 'react-router-dom'
import Product from './pages/Product'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import CustomOrder from './pages/CustomOrder/CustomOrder'
import Confirmation from './pages/CustomOrder/Confirmation'
import OrderInformation from './pages/CustomOrder/OrderInformation'
import OrderPayment from './pages/CustomOrder/OrderPayment'

const App = () => {
  const { pathname } = useLocation()

  const path = pathname === '/checkouts/information' ||
    pathname === '/custom-order/confirmation' ||
    pathname === '/custom-order/confirmation/information' ||
    pathname === '/custom-order/confirmation/information/payment'

  return (
    <>
      {!path ? <Navbar /> : null}
      <Routes>
        {/* Client Pages */}
        <Route path='/' element={<Home />} exact />
        <Route path='/account/login' element={<Login />} exact />
        <Route path='/account/register' element={<Register />} />
        <Route path='/account/reset' element={<Reset />} />
        <Route path='/products' element={<Products />} exact />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/custom-order' element={<CustomOrder />} />
        <Route path='/custom-order/confirmation' element={<Confirmation />} />
        <Route path='/custom-order/confirmation/information' element={<OrderInformation />} />
        <Route path='/custom-order/confirmation/information/payment' element={<OrderPayment />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkouts/information' element={<Checkout />} />
      </Routes>
      {!path ? <Footer /> : null}
    </>
  )
}

export default App

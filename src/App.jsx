import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Auth from './pages/Auth'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App

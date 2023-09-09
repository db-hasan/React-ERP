import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'
import Error from './Error'
import Login from './Backend/Pages/Login'
import Dashboard from './Backend/Dashboard'
import Brand from './Backend/Pages/Brand'
import Category from './Backend/Pages/Category'
import SubCategory from './Backend/Pages/SubCategory'
import Product from './Backend/Pages/Product'
import Supplier from './Backend/Pages/supplier'
import Stock from './Backend/Pages/Stock'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend" element={<FrontHome />} />
        <Route path="/service" element={<Service />} >
          <Route path="data" element={<Dome />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/product" element={<Product />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/stock" element={<Stock />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App

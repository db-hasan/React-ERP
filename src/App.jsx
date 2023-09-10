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
import AddProduct from './Backend/Pages/AddProduct'
import AddSupplier from './Backend/Pages/AddSupplier'
import PurchaesStock from './Backend/Pages/PurchaesStock'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend" element={<FrontHome />} />
        <Route path="/service" element={<Service />} >
          <Route path="data" element={<Dome />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/SubCategory" element={<SubCategory />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/AddSupplier" element={<AddSupplier />} />
        <Route path="/PurchaesStock" element={<PurchaesStock />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App

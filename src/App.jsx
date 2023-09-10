import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'
import Error from './Error'
import Login from './Backend/Login'
import Dashboard from './Backend/Dashboard'
import Brand from './Backend/Pages/Category/Brand'
import Category from './Backend/Pages/Category/Category'
import SubCategory from './Backend/Pages/Category/SubCategory'
import AddProduct from './Backend/Pages/Product/AddProduct'
import AddSupplier from './Backend/Pages/Product/AddSupplier'
import PurchaesStock from './Backend/Pages/Stock/PurchaesStock'
import RetrunStock from './Backend/Pages/Stock/RetrunStock'
import DamageStock from './Backend/Pages/Stock/DamageStock'
import PurchaesStockInvioce from './Backend/Pages/Stock/PurchaesStockInvioce'
import RetrunStockInvioce from './Backend/Pages/Stock/RetrunStockInvioce'
import DamageStockInvioce from './Backend/Pages/Stock/DamageStockInvioce'


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
        <Route path="/RetrunStock" element={<RetrunStock />} />
        <Route path="/DamageStock" element={<DamageStock />} />
        <Route path="/PurchaesStockInvioce" element={<PurchaesStockInvioce />} />
        <Route path="/RetrunStockInvioce" element={<RetrunStockInvioce />} />
        <Route path="/DamageStockInvioce" element={<DamageStockInvioce />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App

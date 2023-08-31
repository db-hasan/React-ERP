import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'
import Error from './Error'
import Dashboard from './Backend/Dashboard'
import Category from './Backend/Category/Category'
import Brand from './Backend/Category/Brand'
import Subcategory from './Backend/Category/Subcategory'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend" element={<FrontHome />} />
        <Route path="/service" element={<Service />} >
          <Route path="data" element={<Dome />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<Subcategory />} />
        <Route path="/brand" element={<Brand />} /> 
      </Routes>
    </BrowserRouter>
  )
}
export default App

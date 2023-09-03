import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'
import Error from './Error'
import Dashboard from './Backend/Dashboard'
import ManageCategory from './Backend/Category/ManageCategory'
// import ManageSubCategory from './Backend/SubCategory/ManageSubCategory'
// import ManageBrands from './Backend/Brands/ManageBrands'


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
        <Route path="/category" element={<ManageCategory />} /> 
        {/* <Route path="/subcategory" element={<ManageSubCategory />} /> 
        <Route path="/brand" element={<ManageBrands />} />  */}
      </Routes>
    </BrowserRouter>
  )
}
export default App

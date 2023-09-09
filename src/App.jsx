import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'
import Error from './Error'
import Dashboard from './Backend/Dashboard'
import ManageBrand from './Backend/Pages/ManageBrand'
import ManageCategory from './Backend/Pages/ManageCategory'
import ManageSubCategory from './Backend/Pages/ManageSubCategory'



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
        <Route path="/brand" element={<ManageBrand />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/subcategory" element={<ManageSubCategory />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App

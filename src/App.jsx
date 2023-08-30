import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import FrontHome from './Frontend/FrontHome'
import Service from './Frontend/Service'
import Dome from './Frontend/Dome'
import Error from './Error'
import BackHome from './Backend/BackHome'
import Category from './Backend/Category'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend" element={<FrontHome />} />
        <Route path="/service" element={<Service />} >
          <Route path="data" element={<Dome />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<BackHome />} />
        <Route path="/category" element={<Category />} />

        
      </Routes>
    </BrowserRouter>
  )
}
export default App

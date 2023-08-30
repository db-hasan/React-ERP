import React from 'react'
import './style.css'
import BackHeader from './BackHeader'
import BackFooter from './BackFooter'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'


const BackHome = () => {
  return (
    <>
    <BackHeader />
    <div class="row rows">
      <div class="col-sm-5 col-md-3 col-lg-2">
        <Sidebar />
      </div>
      <div class="col-sm-8 col-md-9 col-lg-10">
        <Dashboard />
      </div>
    </div>
    <BackFooter />
    </>
    
  )
}

export default BackHome
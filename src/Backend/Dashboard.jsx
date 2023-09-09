import React from 'react'
import './style.css'
import BackHeader from './BackHeader'
import BackFooter from './BackFooter'
import Sidebar from './Sidebar'


const Dashboard = () => {
  return (
    <>
      <BackHeader />
      <div class="row rows">
        <div class="col-sm-4 col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <div class="col-sm-8 col-md-9 col-lg-10 dash">
          <img src="dashboard.png" alt="" />
        </div>
      </div>
      <BackFooter />
    </>

  )
}

export default Dashboard
import React from 'react'
import './style.css'
import BackHeader from './BackHeader'
import BackFooter from './BackFooter'
import Sidebar from './Sidebar'


const Dashboard = () => {
  return (
    <>
      <BackHeader />
      <div className="row rows">
        <div className="col-sm-4 col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-sm-8 col-md-9 col-lg-10 dash">
          <div>

          </div>
        </div>
      </div>
      <BackFooter />
    </>

  )
}

export default Dashboard
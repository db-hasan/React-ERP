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
          <div className='px-4'>
            <div className='row pt-2'>
              <div className='col-md-3 p-2'>
                <div className='card p-3 text-light bg-info bg-gradient'>
                  <p><strong>Sales Order</strong></p>
                  <p><i className='fa-solid fa-cart-shopping fa-2xl'></i> 1011001</p>
                  <span>Total Stock</span>
                </div>
              </div>
              <div className='col-md-3 p-2'>
                <div className='card p-3 text-light bg-success bg-opacity-75'>
                  <p><strong>Expenses</strong></p>
                  <p><i className='fa-solid fa-money-check-dollar fa-2xl'></i> 1011001</p>
                  <span>Total Stock</span>
                </div>
              </div>
              <div className='col-md-3 p-2'>
                <div className='card p-3 text-light bg-warning bg-opacity-75'>
                  <p><strong>Profit</strong></p>
                  <p><i className='fa-solid fa-industry fa-2xl'></i> 1011001</p>
                  <span>Total Stock</span>
                </div>
              </div>
              <div className='col-md-3 p-2'>
                <div className='card p-3 text-light bg-danger bg-opacity-75'>
                  <p><strong>Total Stock</strong></p>
                  <p><i className='fa-solid fa-cart-flatbed-suitcase fa-2xl'></i> 1011001</p>
                  <span>Total Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackFooter />
    </>

  )
}

export default Dashboard
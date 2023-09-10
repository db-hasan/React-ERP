import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
import BackHeader from '../../BackHeader'
import BackFooter from '../../BackFooter'
import Sidebar from '../../Sidebar'

const StockReport = () => {
  return (
    <>
            <BackHeader />
            <div className="row rows">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10 px-4 pt-4">
                    <div className=''><h3>Stock Report</h3></div> 
                    <hr />
                    <div class="row g-3 pt-4">
                      <div className='col-md-6'>
                        <form action="" method="post">
                          <div className='row g-3 px-4'>
                            <div class="col-md-12">
                            <label for="inputState" class="form-label"><strong>Stock Report</strong></label>
                            <select id="inputState" class="form-select">
                              <option selected>All Item </option>
                            </select>
                            </div>
                            <div class="col-md-6">
                              <label for="FromDate" class="form-label">From Date</label>
                              <input type="date" class="form-control" placeholder="From" id="FromDate"/>
                            </div>
                            <div class="col-md-6">
                              <label for="ToDate" class="form-label">To Date</label>
                              <input type="date" class="form-control" placeholder="TO" id="ToDate"/>
                            </div>
                            <div class="col-12">
                              <button type="submit" class="btn btn-primary">Submited</button>
                            </div>
                          </div>
                        </form> 
                      </div>
                      

                      <div className='col-md-6'>
                        <form action="" method="post">
                          <div className='row g-3 px-4'>
                            <div class="col-md-12">
                            <label for="inputState" class="form-label"><strong>Stock Item Wise</strong></label>
                            <select id="inputState" class="form-select">
                              <option selected>Item Name </option>
                            </select>
                            </div>
                            <div class="col-md-6">
                              <label for="FromDate" class="form-label">From Date</label>
                              <input type="date" class="form-control" placeholder="From" id="FromDate"/>
                            </div>
                            <div class="col-md-6">
                              <label for="ToDate" class="form-label">To Date</label>
                              <input type="date" class="form-control" placeholder="TO" id="ToDate"/>
                            </div>
                            <div class="col-12">
                              <button type="submit" class="btn btn-primary">Submited</button>
                            </div>
                          </div>
                        </form> 
                      </div> 
                  </div>
                </div>
            </div>
            <BackFooter />
    </>
  )
}

export default StockReport
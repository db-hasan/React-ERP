import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
import BackHeader from '../../BackHeader'
import BackFooter from '../../BackFooter'
import Sidebar from '../../Sidebar'

const SalesReport = () => {
  return (
    <>
            <BackHeader />
            <div className="row rows">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10 px-4 pt-4">
                    <div className=''><h3>Sales Report</h3></div> 
                    <hr />
                    <form class="row g-3 pt-3">
                      <div class="col-md-12">
                        <label for="inputState" class="form-label">Employees</label>
                        <select id="inputState" class="form-select">
                          <option selected>ALL Employees </option>
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
                    </form>
                </div>
            </div>
            <BackFooter />
    </>
  )
}

export default SalesReport
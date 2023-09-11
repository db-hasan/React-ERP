import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
import BackHeader from '../../BackHeader'
import BackFooter from '../../BackFooter'
import Sidebar from '../../Sidebar'

const RetrunStockInvioce = () => {
    return (
        <>
            <BackHeader />
            <div className="row rows">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10 pt-2 px-3">
                    <div className='row'>
                        <div className='col'><h3>Retrun Invioce</h3></div>
                        <div className='col text-end icons'>
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button className="btn btn-primary"><Link to="/RetrunStock" className="text-light"><i className="fa-solid fa-plus" /> Add New </Link></button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col'><h3>Manage</h3></div>
                        <div className='col text-end icons  pb-2'>
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" className="btn btn-success">View</button>
                                <button type="button" className="btn btn-warning">Print</button>
                            </div>
                        </div>
                    </div>
                    <div className='row show_search'>
                        <div className="col">
                            <span className='m-2' >Show </span>
                            <select className='px-3' name="" id="">
                                <option value="">10</option>
                                <option value="">25</option>
                                <option value="">50</option>
                                <option value="">100</option>
                            </select>
                            <span className='m-2' > Entries</span>
                        </div>
                        <div className="col">
                            <div className="input-group ">
                                <input type="text" className="form-control" placeholder="Type here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">Search</span>
                            </div>
                        </div>
                    </div>
                    <Scrollbars autoHeight
                        autoHeightMin={100}
                        autoHeightMax={300}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> ID</th>
                                    <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Suppliers</th>
                                    <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Phone</th>
                                    <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Date</th>
                                    <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> SalesMan</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1111</td>
                                    <td>Hasan</td>
                                    <td>01723629080</td>
                                    <td>11/09/2023</td>
                                    <td>Mim</td>
                                    <td className="icons">
                                        <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                        <a href="" className="view" data-toggle="modal"><i class="fa-solid fa-file-invoice fa-lg"></i></a>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </Scrollbars>
                    <div className=''>
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <BackFooter />
        </>
    )
}

export default RetrunStockInvioce
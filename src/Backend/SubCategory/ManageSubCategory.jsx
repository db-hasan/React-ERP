import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
import BackHeader from '../BackHeader'
import BackFooter from '../BackFooter'
import Sidebar from '../Sidebar'

const ManageSubCategory = () => {
    return (
        <>
            <BackHeader />
            <div className="row rows">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10">
                    <div className="px-4 pt-2">
                        <div className="text-end">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><Link to="" className="text-light"> Add New</Link></button>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col'><h3>Manage</h3></div>
                            <div className='col text-end icons  pb-2'>
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" className="btn btn-success">Right</button>
                                    <button type="button" className="btn btn-warning">Print</button>
                                </div>
                            </div>
                        </div>
                        <div className='row show_search'>
                            <div className="col">
                                <span className='m-2' htmlFor="">Show </span>
                                <select className='px-3' name="" id="">
                                    <option value="">10</option>
                                    <option value="">25</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select>
                                <span className='m-2' htmlFor=""> Entries</span>
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
                                        <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Category</th>
                                        <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> SubCategory</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody><tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product </td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td>Electronics Product</td>
                                        <td className="icons">
                                            <a href="" className="view" data-toggle="modal"><i className="fa-solid fa-eye"></i></a>
                                            <a href="" className="edit" data-toggle="modal"><i className="fa-solid fa-pen"></i></a>
                                            <a href="" className="delete" data-toggle="modal"><i className="fa-solid fa-trash"></i></a>
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
            </div>
            <BackFooter />
        </>
    )
}

export default ManageSubCategory
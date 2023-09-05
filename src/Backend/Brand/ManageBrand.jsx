import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
import BackHeader from '../BackHeader'
import BackFooter from '../BackFooter'
import Sidebar from '../Sidebar'

const ManageBrand = () => {
    return (
        <>
            <BackHeader />
            <div class="row rows">
                <div class="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div class="col-sm-8 col-md-9 col-lg-10">
                    <div class="px-4 pt-2">
                        <div className="text-end">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><Link to="" class="text-light"> Add New </Link></button>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col'><h3>Manage</h3></div>
                            <div className='col text-end icons  pb-2'>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-success">Right</button>
                                    <button type="button" class="btn btn-warning">Print</button>
                                </div>
                            </div>
                        </div>
                        <div className='row show_search'>
                            <div className="col">
                                <label className='m-2' htmlFor="">Show </label>
                                <select className='px-3' name="" id="">
                                    <option value="">10</option>
                                    <option value="">25</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select>
                                <label className='m-2' htmlFor=""> Entries</label>
                            </div>
                            <div className="col">
                                <div class="input-group ">
                                    <input type="text" class="form-control" placeholder="Type here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <span class="input-group-text" id="basic-addon2">Search</span>
                                </div>
                            </div>
                        </div>
                        <Scrollbars autoHeight
                            autoHeightMin={100}
                            autoHeightMax={300}>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th><a href=""><i class="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> ID</th>
                                        <th><a href=""><i class="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Brand</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody><tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product </td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1111</td>
                                        <td>Electronics Product</td>
                                        <td class="icons">
                                            <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                            <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                            <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Scrollbars>
                        <div className=''>
                            <nav aria-label="...">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active" aria-current="page">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">Next</a>
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

export default ManageBrand
import React, {useState, useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
import BackHeader from '../../BackHeader'
import BackFooter from '../../BackFooter'
import Sidebar from '../../Sidebar'

const ManageBrand = () => {

    // Brand Insert----------------------------------------------------------------------
    const [brand, setBrand] = useState({
        name: ''
    })

    const handleInput = (e) => {
        e.persist();
        setBrand({ ...brand, [e.target.name]: e.target.value });
    };

    const saveBrand = (e) => {
        e.preventDefault()
        const newdata = {
            input_brand: brand.input_brand,
        }

        axios.post(`http://localhost/React-ERP/api/brand/brand_insert.php`, newdata).then(res => {
            Swal.fire(
                'Brand add Successful',
             )
        });
    }

    // Brand View----------------------------------------------------------------------

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/React-ERP/api/brand/brand_view.php`).then(res => {
            setBrands(res.data)
        });
    }, []);
    
    // Brand Delete----------------------------------------------------------------------

   const brandDelete = (ev, brand_id) => {
        const click = ev.currentTarget;
        ev.preventDefault();
        Swal.fire({
            title: 'Are You Sure?',
            text: 'You wonnt to be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it.',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost/React-ERP/api/brand/brand_delete.php?id=${brand_id}`).then(res => {
                    Swal.fire(
                        'Successful'
                    )
                    click.closest("tr").remove();
                })
            }
        })
    }
    
 // Brand Edit----------------------------------------------------------------------



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
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><Link to="" className="text-light"><i className="fa-solid fa-plus" /> Add New </Link></button>
                        </div>
                        <div className="modal fade mt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={saveBrand}>
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Brand</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Brand Name</label>
                                            <input id="exampleInputEmail1" className="form-control"  type="text" name="input_brand"  onChange={handleInput}/>
                                        </div>  
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </form>
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
                                        <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Brand</th>
                                        <th><a href=""><i className="fa-solid fa-right-left fa-rotate-90 fa-sm" ></i></a> Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {brands.map((bnd) => (
                                    <tr>
                                        <td>{bnd.brand_id}</td>
                                        <td>{bnd.brand_name}</td>
                                        <td>Active</td>
                                        <td className="icons">
                                            <button type="button" className="btn edit" data-bs-toggle="modal" data-bs-target="#editModal"><i className="fa-solid fa-pen"></i></button>
                                            <div className="modal fade mt-5" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Brand</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form action="">
                                                                <div className="mb-3 text-start">
                                                                    <label for="exampleInputEmail1" className="form-label">Brand Name</label>
                                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Update</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <button type="button" onClick={(ev) => brandDelete(ev, bnd.brand_id)} className="btn delete" ><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    ))}
                                    
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

export default ManageBrand
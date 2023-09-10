import React from 'react'
import { Link } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2';
import BackHeader from '../../BackHeader'
import BackFooter from '../../BackFooter'
import Sidebar from '../../Sidebar'

const DamageStock = () => {
    return (
        <>
            <BackHeader />
            <div className="row rows">
                <div className="col-sm-4 col-md-3 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-10 pt-2 px-3">
                    <div className='row'>
                        <div className='col'><h3>Damage Stock</h3></div>
                        <div className='col text-end icons'>
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button className="btn btn-primary" ><Link to="/DamageStockInvioce" className="text-light"><i className="fa-solid fa-file-invoice" /> Invioce </Link></button>
                            </div>    
                        </div>                           
                    </div>
                    <hr />
                    <Scrollbars autoHeight
                        autoHeightMin={100}
                        autoHeightMax={470}>
                        <form className='row px-4' action="" method="post">

                            {/* Client info */}
                            <div className='col-lg-3'>
                                <div className="row g-3 p-3">
                                    <span><strong>Client info</strong></span>
                                    <div className="col-lg-12">
                                        <select id="inputState" className="form-select">
                                            <option value=""> From (Main Stock)</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <select id="inputState" className="form-select">
                                            <option value=""> To (Suppliers)</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control" id="" placeholder="Date" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control" id="" placeholder="Discount" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" placeholder="Note" id="floatingTextarea2"></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Invoice info */}
                            <div className='col-lg-9'>
                                <div className="row g-3 p-3">
                                    <span><strong>Invoice info</strong></span>
                                    <div className="col-12">
                                        <select id="inputState" className="form-select">
                                            <option value="">Number of Rows</option>
                                            <option value="">20</option>
                                            <option value="">30</option>
                                            <option value="">50</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label for="inputEmail4" className="form-label"><strong>Name</strong></label>
                                    </div>
                                    <div className="col-2">
                                        <label for="inputPassword4" className="form-label"><strong>QTY</strong></label>
                                    </div>
                                    <div className="col-2">
                                        <label for="inputAddress" className="form-label"><strong>Price</strong></label>
                                    </div>
                                    <div className="col-2">
                                        <label for="inputAddress2" className="form-label"><strong>Total</strong></label>
                                    </div>
                                    {/* input  */}

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div>

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div>

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="" placeholder="Total" />
                                    </div>

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div>

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div>

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div>

                                    <div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div><div className="col-6">
                                        <select id="inputState" className="form-select">
                                            <option value="">Product Name</option>
                                        </select>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputPassword4" placeholder="QTY" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Unit Price" />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Total" />
                                    </div>

                                    <hr />
                                    <div className="col-6">
                                        <label for="inputEmail4" className="form-label"><strong></strong></label>
                                    </div>
                                    <div className="col-2">
                                        <label for="inputPassword4" className="form-label"><strong>QTY: 20</strong></label>
                                    </div>
                                    <div className="col-2">
                                        <label for="inputAddress" className="form-label"><strong>Price</strong></label>
                                    </div>
                                    <div className="col-2">
                                        <label for="inputAddress2" className="form-label"><strong>Total: 500</strong></label>
                                    </div>


                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Scrollbars>

                </div>
            </div>
            <BackFooter />
        </>
    )
}

export default DamageStock
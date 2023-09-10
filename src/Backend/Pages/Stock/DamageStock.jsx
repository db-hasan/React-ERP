import React from 'react'
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
                <div className="col-sm-8 col-md-9 col-lg-10 ">
                    <div className='pt-3 px-3'>
                        <h4 className='text-end'>Damage Product</h4>
                    </div>
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
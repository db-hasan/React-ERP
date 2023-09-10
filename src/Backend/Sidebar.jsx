import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
      <Scrollbars autoHeight
        autoHeightMin={100}
        autoHeightMax={600}>
        <div id='sidebar'>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item custom">
              <button className="accordion-button collapsed" type="button">
                <i className="fa-solid fa-house"> <Link to="/"> Dashboard</Link></i>
              </button>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1"
                aria-expanded="false" aria-controls="flush-collapse1">
                <i className="fa-solid fa-tags"><Link to="/"> Category</Link></i>
              </button>
              <div id="flush-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-tag"><Link to="/Brand"> Brands</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-layer-group"><Link to="/Category"> Category</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-box"><Link to="/SubCategory"> SubCategory</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9"
                aria-expanded="false" aria-controls="flush-collapse9">
                <i className="fa-solid fa-layer-group"><Link to="#"> Product</Link></i>
              </button>
              <div id="flush-collapse9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-plus"><Link to="/AddProduct"> Add Product</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-truck-fast"><Link to="/AddSupplier"> Add Supplier</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2"
                aria-expanded="false" aria-controls="flush-collapse2">
                <i className="fa-solid fa-warehouse "><Link to="#"> Stock</Link></i>
              </button>
              <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-baby-carriage"><Link to="/PurchaesStock"> Purchaes Stock</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-right-left"><Link to="/RetrunStock"> Retrun Stock</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-trash-can"><Link to="/DamageStock"> Damage Stock</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-file-invoice-dollar"><Link to="/PurchaesStockInvioce"> Stock Invioce</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-retweet"><Link to="/RetrunStockInvioce"> Retrun Invioce</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-file-invoice"><Link to="/DamageStockInvioce"> Damage Invioce</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3"
                aria-expanded="false" aria-controls="flush-collapse3">
                <i className="fa-solid fa-cart-shopping"><Link to="#"> Sales</Link></i>
              </button>
              <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-cart-shopping"><Link to="/SalesProduct"> Sales Product</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-right-left"><Link to="/RetrunProduct"> Retrun Product</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-file-invoice-dollar"><Link to="/SalesInvioce"> Sales Invioce</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-file-invoice"><Link to="/RetrunSalesInvioce"> Retrun Invioce</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4"
                aria-expanded="false" aria-controls="flush-collapse4">
                <i className="fa-solid fa-chart-simple"><Link to="#"> Report</Link></i>
              </button>
              <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-layer-group"><Link to="/"> Stock Report</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-cart-shopping"><Link to="/"> Sales Report</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-truck-fast"><Link to="#"> Supplier</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5"
                aria-expanded="false" aria-controls="flush-collapse5">
                <i className="fa-solid fa-chart-column"><Link to="#"> Collection</Link></i>
              </button>
              <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-plus"><Link to="#"> Add Collection</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-list"><Link to="#"> Collection list</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6"
                aria-expanded="false" aria-controls="flush-collapse6">
                <i className="fa-solid fa-street-view"><Link to="#"> Accounts</Link></i>
              </button>
              <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-plus"><Link to="#"> Add Collection</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-list"><Link to="#"> Collection list</Link></i></div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8"
                aria-expanded="false" aria-controls="flush-collapse8">
                <i className="fa-solid fa-users"><Link to="#"> Users</Link></i>
              </button>
              <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> <i className="fa-solid fa-users"><Link to="#"> Add User</Link></i></div>
                <div className="accordion-body"> <i className="fa-solid fa-address-card"><Link to="#"> Contact</Link></i></div>
              </div>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item custom">
                <button className="accordion-button collapsed" type="button">
                  <i className="fa-solid fa-right-to-bracket"> <Link to="#accordionFlushExample"> Logout</Link></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </>
  )
}

export default Sidebar
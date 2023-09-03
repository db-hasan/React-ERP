import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <Scrollbars  autoHeight
      autoHeightMin={100}
      autoHeightMax={600}>
    <div id='sidebar'>
      <div  class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item custom">
          <button class="accordion-button collapsed" type="button">
            <i class="fa-solid fa-house"> <Link to="/"> Dashboard</Link></i>
          </button>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1"
            aria-expanded="false" aria-controls="flush-collapse1">
            <i class="fa-solid fa-layer-group"><Link to="/"> Category</Link></i>
          </button>
          <div id="flush-collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-tag"><Link to="/brand"> Brands</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-layer-group"><Link to="/category"> Category</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-box"><Link to="/subcategory"> Sub Category</Link></i></div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9"
            aria-expanded="false" aria-controls="flush-collapse9">
            <i class="fa-solid fa-list"><Link to="#"> Product</Link></i>
          </button>
          <div id="flush-collapse9" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-plus"><Link to="#"> Add Product</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-list"><Link to="#"> Product list</Link></i></div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2"
            aria-expanded="false" aria-controls="flush-collapse2">
            <i class="fa-solid fa-warehouse "><Link to="#"> Stock</Link></i>
          </button>
          <div id="flush-collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-baby-carriage"><Link to="/"> Purchaes Stock</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-right-left"><Link to="/"> Retrun Product</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-trash-can"><Link to="/"> Damage Product</Link></i></div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3"
            aria-expanded="false" aria-controls="flush-collapse3">
            <i class="fa-solid fa-cart-shopping"><Link to="#"> Sales</Link></i>
          </button>
          <div id="flush-collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-cart-shopping"><Link to="/"> Sales Product</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-right-left"><Link to="/"> Retrun Product</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-trash-can"><Link to="/"> Damage Product</Link></i></div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4"
            aria-expanded="false" aria-controls="flush-collapse4">
            <i class="fa-solid fa-chart-simple"><Link to="#"> Report</Link></i>
          </button>
          <div id="flush-collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-layer-group"><Link to="/"> Stock Report</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-cart-shopping"><Link to="/"> Sales Report</Link></i></div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5"
            aria-expanded="false" aria-controls="flush-collapse5">
            <i class="fa-solid fa-chart-column"><Link to="#"> Collection</Link></i>
          </button>
          <div id="flush-collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-plus"><Link to="#"> Add Collection</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-list"><Link to="#"> Collection list</Link></i></div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6"
            aria-expanded="false" aria-controls="flush-collapse6">
            <i class="fa-solid fa-street-view"><Link to="#"> Accounts</Link></i>
          </button>
          <div id="flush-collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-plus"><Link to="#"> Add Collection</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-list"><Link to="#"> Collection list</Link></i></div>
          </div>
        </div>  

        <div class="accordion-item">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8"
            aria-expanded="false" aria-controls="flush-collapse8">
            <i class="fa-solid fa-users"><Link to="#"> Users</Link></i>
          </button>
          <div id="flush-collapse8" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"> <i class="fa-solid fa-users"><Link to="#"> Add Roll</Link></i></div>
            <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="#"> View Users</Link></i></div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item custom">
            <button class="accordion-button collapsed" type="button">
              <i class="fa-solid fa-address-card"> <Link to="#accordionFlushExample"> Contact</Link></i>
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
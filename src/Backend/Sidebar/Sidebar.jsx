import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item custom">
        <button class="accordion-button collapsed" type="button">
          <i class="fa-solid fa-house"> <Link to="/"> Dashboard</Link></i>
        </button>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1"
          aria-expanded="false" aria-controls="flush-collapse1">
          <i class="fa-solid fa-box"><Link to="/"> Categories</Link></i>
        </button>
        <div id="flush-collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-tag"><Link to="/brand"> Brands</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-box"><Link to="/category"> Categories</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-box"><Link to="/subcategory"> Sub Categories</Link></i></div>
        </div>
      </div>

      <div class="accordion-item custom">
        <button class="accordion-button collapsed" type="button">
          <i class="fa-solid fa-warehouse"> <Link to="/"> Product</Link></i>
        </button>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2"
          aria-expanded="false" aria-controls="flush-collapse2">
          <i class="fa-solid fa-layer-group"><Link to="#"> Stock</Link></i>
        </button>
        <div id="flush-collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-layer-group"><Link to="/purchaes"> Purchaes Stock</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-right-left"><Link to="/"> Retrun Product</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="/"> Stock Report</Link></i></div>
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
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="/"> Sales Report</Link></i></div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4"
          aria-expanded="false" aria-controls="flush-collapse4">
          <i class="fa-solid fa-street-view"><Link to="#"> Accounts</Link></i>
        </button>
        <div id="flush-collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-street-view"><Link to="/"> Bookin Status</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-street-view"><Link to="#"> Online list</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="#"> Booking list</Link></i></div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5"
          aria-expanded="false" aria-controls="flush-collapse5">
          <i class="fa-solid fa-chart-simple"><Link to="#"> Report</Link></i>
        </button>
        <div id="flush-collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-chart-simple"><Link to="#flush-collapse3"> Report</Link></i>
          </div>
          <div class="accordion-body"> <i class="fa-solid fa-chart-simple"><Link to="#"> Report</Link></i></div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6"
          aria-expanded="false" aria-controls="flush-collapse6">
          <i class="fa-solid fa-stethoscope"><Link to="#"> Specialties</Link></i>
        </button>
        <div id="flush-collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-stethoscope"><Link to="#"> Add Specialty</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="#"> All Specialty</Link></i></div>
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
    </>
  )
}

export default Sidebar
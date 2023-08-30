import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item custom">
        <button class="accordion-button collapsed" type="button">
          <i class="fa-solid fa-house"> <Link to="/dashboard"> Dashboard</Link></i>
        </button>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1"
          aria-expanded="false" aria-controls="flush-collapse1">
          <i class="fa-solid fa-box"><Link to="/"> Categories</Link></i>
        </button>
        <div id="flush-collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-tag"><Link to="/"> Brands</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-box"><Link to="/categories"> Categories</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-box"><Link to="/categories"> Sub Categories</Link></i></div>
          
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2"
          aria-expanded="false" aria-controls="flush-collapse2">
          <i class="fa-solid fa-code-branch"><Link to="#"> Branch</Link></i>
        </button>
        <div id="flush-collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-code-branch"><Link to="/addbranch"> Add Branch</Link></i>
          </div>
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="/viewbranch"> Branch list</Link></i></div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3"
          aria-expanded="false" aria-controls="flush-collapse3">
          <i class="fa-solid fa-user-doctor"><Link to="#"> Doctors</Link></i>
        </button>
        <div id="flush-collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-user-doctor"><Link to="/adddoctors"> Add Doctors</Link></i>
          </div>
          <div class="accordion-body"> <i class="fa-solid fa-globe"><Link to="#"> Online list</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="/viewdoctors"> Doctors list</Link></i></div>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4"
          aria-expanded="false" aria-controls="flush-collapse4">
          <i class="fa-solid fa-handshake-angle"><Link to="#"> Booking</Link></i>
        </button>
        <div id="flush-collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-handshake-angle"><Link to="/"> Bookin Status</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-globe"><Link to="#"> Online list</Link></i></div>
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
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7"
          aria-expanded="false" aria-controls="flush-collapse7">
          <i class="fa-solid fa-clock"><Link to="#"> Schedule</Link></i>
        </button>
        <div id="flush-collapse7" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"> <i class="fa-solid fa-clock"><Link to="#"> Add Schedule</Link></i></div>
          <div class="accordion-body"> <i class="fa-solid fa-eye"><Link to="#"> View Schedule</Link></i></div>
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
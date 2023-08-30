import React from 'react'
import {Link} from 'react-router-dom'

const BackHeader = () => {
  return (
    <>
    <nav class="navbar navbar-expand-md navbar-light bg-success ">
      <div class="container-fluid">
        <div class=""><Link class="navbar-brand logo" to="/">HelpsX -IT</Link></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="col-md-10 ">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/"> <i class="fa-solid fa-handshake-angle"></i> Booking
                  Status</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/"> <i class="fa-solid fa-clock"></i> Time Schedule</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link icons" aria-current="page" to="/"><i class="fa-solid fa-bell"></i> Notification</Link>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <div class="dropdown user">
              <button class="btn user-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/img/avatar.png" class="img-fluid" />
              </button>
              <ul class="dropdown-menu ">
                <li class="dropdown-item"><Link class="dropdown-link" to="/"><i class="fas fa-user-tie"></i>
                     My Profile</Link></li>
                <li class="dropdown-item"><Link class="dropdown-link" to="/"><i class="fas fa-cog"></i> Manage Account</Link></li>
                <li class="dropdown-item"><Link class="dropdown-link" to="/"><i class="fas fa-sign-out-alt"></i> Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default BackHeader
import React from 'react'
import { Link } from 'react-router-dom'

const BackHeader = () => {
  return (
    <>
      <nav id='header' className="navbar navbar-expand-md navbar-light bg-success ">
        <div className="container-fluid">
          <div className=""><Link className="navbar-brand logo " to="/">Inventory</Link></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-md-10 ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/"> <i className="fa-solid fa-handshake-angle"></i> </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/"> <i className="fa-solid fa-clock"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link icons" aria-current="page" to="/"><i className="fa-solid fa-bell"></i> </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="dropdown user">
                <button className="btn user-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="src/assets/images/avatar.png" className="img-fluid" />
                </button>
                <ul className="dropdown-menu ">
                  <li className="dropdown-item"><Link className="dropdown-link" to="/"><i className="fas fa-user-tie"></i> My Profile</Link></li>
                  <li className="dropdown-item"><Link className="dropdown-link" to="/"><i className="fas fa-cog"></i> Manage Account</Link></li>
                  <li className="dropdown-item"><Link className="dropdown-link" to="/"><i className="fas fa-sign-out-alt"></i> Logout</Link>
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
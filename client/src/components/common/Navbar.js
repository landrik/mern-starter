import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div className="container-fluid">
        <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/" target="_blank">User profile</Link>
        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div className="form-group mb-0">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-search"></i></span>
              </div>
              <input className="form-control" placeholder="Search" type="text" />
            </div>
          </div>
        </form>
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <Link className="nav-link pr-0" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
                </div>
              </div>
            </Link>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <Link to="/" className="dropdown-item">
                <i className="ni ni-single-02"></i>
                <span>My profile</span>
              </Link>
              <Link to="/" className="dropdown-item">
                <i className="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </Link>
              <Link to="/" className="dropdown-item">
                <i className="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </Link>
              <Link to="/" className="dropdown-item">
                <i className="ni ni-support-16"></i>
                <span>Support</span>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="#!" className="dropdown-item">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

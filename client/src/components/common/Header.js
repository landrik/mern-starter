import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"  style={{
      minHeight: '600px', 
      backgroundImage: url('https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg'), 
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }}>
      <span className="mask bg-gradient-default opacity-8"></span>
  
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white">Hello Jesse</h1>
            <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            <Link to="#!" className="btn btn-info">Edit profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

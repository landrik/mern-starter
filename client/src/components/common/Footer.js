import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row align-items-center justify-content-xl-between">
        <div className="col-xl-6 m-auto text-center">
          <div className="copyright">
            <p>Made with <Link to="/" target="_blank">Argon Dashboard</Link> by Creative Tim</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

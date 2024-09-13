import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 mt-3 custom-navbar container">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">Rebel Case Prep</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto justify-content-between d-flex flex-direction-column  align-items-center gap-3">
            <a className="nav-link mx-2" href="#">Blog</a>
            <a className="nav-link mx-2" href="#">About Us</a>
            <button className="btn btn-dark custom-button">Get in touch</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Footer.css";
import logo from './Images/nhancio_logo.webp'

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row d-flex justify-content-between ">
          
          {/* Our Services Section */}
          <div className="col-md-3 col-sm-12 footer-section text-left">
            <h5 className="fw-bold">Our services</h5>
            <ul className="list-unstyled">
              <li>Team augmentation</li>
              <li>Mobile Development</li>
              <li>Back-end Development</li>
              <li>AI Development</li>
              <li>Front-end Development</li>
              <li>Web Development</li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="col-md-2 col-sm-12 text-center">
            <img
              src={logo}
              alt="Nhancio Logo"
              className="footer-logo img-fluid"
              width="100"
              height="100"
            />
          </div>

          {/* Company Section */}
          <div className="col-md-2 col-sm-12 footer-section text-right">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li>Who we are</li>
              <li>Clients</li>
              <li>Jobs</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

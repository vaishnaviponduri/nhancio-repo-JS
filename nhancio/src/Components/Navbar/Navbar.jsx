import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
// import './nav.js'
// export className Navbar extends Component {
const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home">
          <img src="./Nhancio.png" alt="Logo" height={"50px"}
          // style="height: 50px" 
          />
          <span className="brand-nhan">Nhan</span><span className="brand-cio">cio</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          id="sidebarToggle"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact Us</a>
            </li>
            <div className="university">
              <Link to="https://learning.nhancio.com/" target="_blank" id="learn"
                >Learn&Earn</Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <hr />

     {/* Sidebar  */}
    <div id="sidebar" className="sidebar">
      <div className="sidebar-content">
        <button type="button" id="closeSidebar">&times;</button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact Us</a>
          </li>
          <div className="university">
            <Link to="https://learning.nhancio.com/" target="_blank" id="Learn"
              >Learn&Earn
              </Link>
          </div>
        </ul>
      </div>
    </div>
    </div>
   
  );
  
};

export default Navbar;

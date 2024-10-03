import React from "react";
import { Link } from "react-router-dom";

// export class Navbar extends Component {
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Nhancio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/case-studies">
                  Case studies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  {" "}
                 Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                About US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                 Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="https://learning.nhancio.com/">
                  Learn & Earn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

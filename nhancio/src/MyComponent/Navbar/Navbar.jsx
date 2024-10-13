import React from "react";
import logo from "./Images/nhancio_logo.webp";
import "./Navbar.css";
import { useState , useEffect } from "react";

const Navbar = () => {
  const [navbarLight, setNavbarLight] = useState(false);

  // Change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarLight(true);
    } else {
      setNavbarLight(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-light", "bg-light");
        navbar.classList.remove("navbar-dark", "bg-dark");
        setNavbarLight(true); // Set navbarLight to true on scroll
      } else {
        navbar.classList.add("navbar-dark", "bg-dark");
        navbar.classList.remove("navbar-light", "bg-light");
        setNavbarLight(false); // Set navbarLight to false when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar navbar-expand-lg sticky-top ${navbarLight ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
        <div className="container-fluid d-flex align-items-center">
          {/* Logo and Brand Name */}
          <a className="navbar-brand d-flex align-items-center me-0" href="#">
            <img
              src={logo}
              alt="Nhancio Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <span className="ms-1 gradient-text">Nhancio</span>
          </a>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* ms-auto keeps items aligned to the right */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link abc" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
              <a
                  className={`nav-link ${
                    navbarLight ? "black-bg-button" : "white-bg-button"
                  }`}
                  href="#"
                >
                  Learn&Earn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
// import { Link} from "react-router-dom";

// export classNameName Navbar extends Component {
const Footer = () => {
  return (
    <div>
<section className="footer" id="Contact">
      <footer id="footer">
        <div className="container">
          <div className="footer-content">
            {/*Logo Section */}
            <div className="footer-logo">
              <a className="navbar-brand" href="#Home">
                <img
                src="Nhancio.png"
                alt="Company Logo"
                className="logo-img"
              />
              </a>
             
              <p>&copy; 2024 nhancio, Inc. All rights reserved.</p>
            </div>
            {/*Quick Links */}
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Contact">Contact Us</a></li>
                {/*<div><a href="https://learning.nhancio.com/" target="_blank" style="color: #fff; text-decoration: none; border:2px solid #fff ;">University</a></div> */}
              </ul>
            </div>
            {/*Connect */}
            <div className="connect">
              <h2>Connect</h2>
              <ul>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/nhancio/posts/?feedView=all"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/nhancio/" target="_blank">
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </Link>
                </li>
                <li>
                  {/*<a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
{/* 
    <section id="copy-right">
      <a href="https://madewithloveinindia.org" target="_blank">
          Made with <span aria-label="Love" style="color: #f43f5e;">&hearts;</span> in Hyderabad, India
      </a>
  </section> */}

</div>
  )
};

export default Footer;

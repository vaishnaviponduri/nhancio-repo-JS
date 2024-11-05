import React from "react";
import "./Footer.css";
import logo from './Images/Nhancio.png'

// const Footer = () => {
//   return (
//     <footer className="footer bg-light py-4">
//       <div className="container">
//         <div className="row d-flex justify-content-between ">
          
     
//           <div className="col-md-3 col-sm-12 footer-section text-left">
//             <h5 className="fw-bold">Our services</h5>
//             <ul className="list-unstyled">
//               <li>Team augmentation</li>
//               <li>Mobile Development</li>
//               <li>Back-end Development</li>
//               <li>AI Development</li>
//               <li>Front-end Development</li>
//               <li>Web Development</li>
//             </ul>
//           </div>

         
//           <div className="col-md-2 col-sm-12 text-center">
//             <img
//               src={logo}
//               alt="Nhancio Logo"
//               className="footer-logo img-fluid"
//               width="100"
//               height="100"
//             />
//           </div>

         
//           <div className="col-md-2 col-sm-12 footer-section text-right">
//             <h5 className="fw-bold">Company</h5>
//             <ul className="list-unstyled">
//               <li>Who we are</li>
//               <li>Clients</li>
//               <li>Jobs</li>
//               <li>Blog</li>
//               <li>Contacts</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


const Footer = () => {
  return (
    <section className="footer" id="Contact">
      <footer id="footer">
        <div className="container">
          <div className="footer-content">
            {/* Logo Section */}
            <div className="footer-logo">
              <img src={logo} alt="Company Logo" className="logo-img" />
              <p>&copy; 2024 nhancio, Inc. All rights reserved.</p>
            </div>
            
            {/* Quick Links */}
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div className="connect">
              <h2>Connect</h2>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/nhancio/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nhancio/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      <section id="copy-right">
        <div className="copy-right-sec">
          <i className="fa-solid fa-copyright"></i> 2024 Powered By
          <a href="#"> Nhancio</a>
        </div>
      </section>
    </section>
  );
};

export default Footer;


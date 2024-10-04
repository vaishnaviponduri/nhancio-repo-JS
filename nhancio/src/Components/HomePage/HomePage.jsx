import React from "react";
// import Navbar from './Components/Navbar';
import './HomePage.css';
import backgroundvideo from './back.mp4';
// import { Link } from "react-router-dom";
const HomePage =() =>{
    return(
        <div>
            <div classNameName="video-container">
      <video autoplay muted loop id="backgroundVideo">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    {/* <Navbar /> */}
    
    <div className="content-wrapper">
      {/* Main Page */}
      <section className="mainpage">
        <div className="container">
          <div className="main-section">
            <div className="we">
              <h1>
                Empowering Businesses with <br />
                with <span className="highlight">Cutting-Edge, AI-Driven Solutions</span>
              </h1>
            </div>
            <div className="p">
              <p>
                AI-Driven, Cost-Efficient, and Scalable Solutions to Accelerate Your Business Growth
              </p>
            </div>
            <div className="features">
              <div className="feature-box">
                <h3>
                  AI workflows & Data Science
                  
                </h3>
                <p>Nhancio's AI workflows and data science solutions empower businesses with smarter decision-making and optimized operations</p>
                <div className="bottom">
                  <div className="icons">
                    <i className="fa-brands fa-teamspeak"></i>
                  </div>
                  {/* <div className="navigate">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div> */}
                </div>
              </div>
              <div className="feature-box">
                <h3>Website & App Development</h3>
                <p>Build web and mobile apps with AI-driven innovation, ensuring seamless performance, scalability, and user engagement</p>
                <div className="bottom">
                  <div className="icons">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  {/* <div className="navigate">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div> */}
                </div>
              </div>
              <div className="feature-box">
                <h3>
                  Marketing & Design using AI
                </h3>
                <p>Enhance your marketing and design with AI-powered creativity, driving targeted engagement, personalized experiences, and impactful branding</p>
                <div className="bottom">
                  <div className="icons">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  {/* <div className="navigate">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

        
            </div>

    )
}
export default HomePage;
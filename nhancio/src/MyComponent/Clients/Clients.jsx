import React from "react";
import Slider from "react-slick";
import "./Clients.css";
import profile from "./Images/profile.png"; 

const Client = () => {
  const settings = {
    dots: true,          
    infinite: true,    
    speed: 500,          
    slidesToShow: 1,     
    slidesToScroll: 1,   
    arrows: true,         
  };

  return (
    <div className="container client-container">
      <h1>Success stories of our clients</h1>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="client-grid">
            {/* Left side larger card */}
            <div className="left-card purple-gradient">
              <p className="years">3 Years of Collaboration</p>
              <h2>
                “The Diffco team studied FlashGrid’s product and marketing strategy
                to make sure all of our requirements were addressed”
              </h2>
              <div className="author-info">
                <img src={profile} alt="Art Danielov" className="author-image" />
                <div className="author-info-para">
                  <p>Art Danielov</p>
                  <p>CEO & CTO at FlashGrid</p>
                </div>
              </div>
            </div>

            {/* Right side, with two smaller cards stacked */}
            <div className="right-container">
              <div className="right-card light-blue">
                <p className="tag">Funding & Investment</p>
                <h2>Multiverse Secures $220M in Series D Funding</h2>
                <p className="company-name">multiverse</p>
              </div>
              <div className="right-card light-purple">
                <p className="tag">Achievement</p>
                <h2>Quire Achieves One Million Technical Reports Milestone</h2>
                <p className="company-name">quire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 (add more slides as needed) */}
        <div>
          <div className="client-grid">
            {/* Left side larger card */}
            <div className="left-card purple-gradient" style={{background: "linear-gradient(119deg, #3419a0 .04%, #681087 100.04%)"}}>
              <p className="years">Acquisition</p>
              <h2>
                Dun &amp; Bradstreet Acquires Orb Intelligence
              </h2>
              <div className="author-info">
                <img src={profile} alt="John Doe" className="author-image" />
                <div className="author-info-para">
                  <p>John Doe</p>
                  <p>CEO at TechCo</p>
                </div>
              </div>
            </div>

            {/* Right side, with two smaller cards stacked */}
            <div className="right-container">
              <div className="right-card light-blue" style={{background: "#ffc5c5"}}>
                <p className="tag">Acquisition</p>
                <h2>Mi3 Security acquired by Zimperium</h2>
                <p className="company-name">techco</p>
              </div>
              <div className="right-card light-purple" style={{background: "#e4e8ff"}}>
                <p className="tag">Achievement</p>
                <h2>ChemTreat awarded Platinum Safety Honor by HighWire</h2>
                <p className="company-name">innovapp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 (add more slides as needed) */}
        <div>
          <div className="client-grid">
            {/* Left side larger card */}
            <div className="left-card purple-gradient">
              <p className="years">2 Years of Collaboration</p>
              <h2>
                “The Diffco team helped us achieve remarkable growth through their in-depth market analysis.”
              </h2>
              <div className="author-info">
                <img src={profile} alt="John Doe" className="author-image" />
                <div className="author-info-para">
                  <p>John Doe</p>
                  <p>CEO at TechCo</p>
                </div>
              </div>
            </div>

            {/* Right side, with two smaller cards stacked */}
            <div className="right-container">
              <div className="right-card light-blue">
                <p className="tag">Funding & Investment</p>
                <h2>TechCo Raises $150M in Series C Funding</h2>
                <p className="company-name">techco</p>
              </div>
              <div className="right-card light-purple">
                <p className="tag">Achievement</p>
                <h2>Innovative App Hits 500K Downloads in 6 Months</h2>
                <p className="company-name">innovapp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more slides if needed */}
      </Slider>
    </div>
  );
};

export default Client;

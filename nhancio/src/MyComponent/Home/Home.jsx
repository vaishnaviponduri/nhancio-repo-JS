import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faCode, faRobot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import video from './Images/back.mp4';
import './Home.css'

const Home = () => {
  return (
    <div className="content-wrapper">
      <video id="backgroundVideo" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <section className="mainpage">
        <div className="container">
          <div className="main-section">
            <div className="we">
              <h1>
                Empowering Your Business <br />
                with <span className="highlight">Tailored Digital Solutions</span>
              </h1>
            </div>
            <div className="p">
              <p>
                Innovative, Cost-Efficient, and Scalable Solutions to Drive Your
                Business Forward
              </p>
            </div>
            <div className="features">
              <div className="feature-box">
                <h3>
                  Team <br />
                  Augmentation
                </h3>
                <p>Enabling your team to reach project goals.</p>
                <div className="bottom">
                  <div className="icons">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                  <div className="navigate">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
              <div className="feature-box">
                <h3>Custom Software Development</h3>
                <p>Build software tailored to your business.</p>
                <div className="bottom">
                  <div className="icons">
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <div className="navigate">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
              <div className="feature-box">
                <h3>
                  AI<br />
                  Development
                </h3>
                <p>Disrupt the market.</p>
                <div className="bottom">
                  <div className="icons">
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div className="navigate">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
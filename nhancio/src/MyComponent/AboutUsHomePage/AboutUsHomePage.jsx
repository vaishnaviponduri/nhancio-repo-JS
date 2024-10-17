import React from 'react'
import './AboutUsHomePage.css'

// Images
import AboutImgOne from './Images/AboutImgOne.jpg'; // Your first image import
import AboutImgTwo from './Images/AboutImgTwo.jpg'; // Your second image import

const AboutUsHomePage = () => {
    return (
        <>
            <section className="about-us-section">
                <div className="about-us-container">
                    {/* Left Section: Images */}
                    <div className="about-us-images">
                        <img src={AboutImgOne} alt="Team Collaboration" className="image1" />
                        <img src={AboutImgTwo} alt="Team Working Together" className="image2" />
                    </div>

                    {/* Right Section: Text */}
                    <div className="about-us-content">
                        <h3>About Us</h3>
                        <h2>About Nhancio And Its Innovative IT Solutions</h2>
                        <p>
                            Nhancio, founded by IITians, is committed to driving India's
                            digital transformation through the power of AI. The company focuses
                            on creating innovative AI solutions that revolutionize industries,
                            streamline operations, and ensure these advancements benefit the
                            entire nation.
                        </p>

                        <p>
                            Nhancio bridges technology and education by collaborating with
                            student communities to foster AI-driven innovation and real-world
                            project experiences. This approach empowers businesses while
                            contributing to India's AI leadership and digital transformation
                            goals.
                        </p>

                        <button className="more-details-btn">More Details</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsHomePage

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaBuilding } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "./ContactUs.css";
import ic_quote from "./Images/ic_quote.svg";
import profile from "./Images/profile.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    projectDescription: "",
  });

  const testimonials = [
    {
      quote:
        "Their commitment to excellence ensures our platform remains robust and adaptable to our evolving needs. With their expertise, we’ve successfully enhanced our offerings, making our collaboration highly effective.",
      author: "Don Markland",
      position: "CEO at Accountability Now",
      profileImage: profile,
      rating: 5.0,
    },
    {
      quote:
        "Their commitment to excellence ensures our platform remains robust and adaptable to our evolving needs. With their expertise, we’ve successfully enhanced our offerings, making our collaboration highly effective.",
      author: "Don Markland",
      position: "CEO at Accountability Now",
      profileImage: profile,
      rating: 5.0,
    },
    {
      quote:
        "This team helped us achieve a level of efficiency we never thought possible. Their professionalism and technical skills are top-notch.",
      author: "Sarah Jennings",
      position: "CTO at Tech Solutions",
      profileImage: profile,
      rating: 4.8,
    },
    {
      quote:
        "Their commitment to excellence ensures our platform remains robust and adaptable to our evolving needs. With their expertise, we’ve successfully enhanced our offerings, making our collaboration highly effective.",
      author: "Don Markland",
      position: "CEO at Accountability Now",
      profileImage: profile,
      rating: 5.0,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>
          Let's build something
          <br /> great together.
        </h1>
        <div className="form-fields">
          <div className="form-group">
            <div className="floating-label">
              <FaUser className="input-icon" />
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                aria-label="First Name"
              />
            </div>
            <div className="floating-label">
              <FaUser className="input-icon" />
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                aria-label="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="floating-label">
              <FaBuilding className="input-icon" />
              <label>Company name (optional)</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                aria-label="Company Name"
              />
            </div>
            <div className="floating-label">
              <FaEnvelope className="input-icon" />
              <label>Work email</label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                required
                aria-label="Work Email"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="floating-label">
              <FaPhoneAlt className="input-icon" />
              <label>Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                aria-label="Phone Number"
              />
            </div>
          </div>
          <div className="form-group full-width">
            <div className="floating-label">
              <label>Tell us about your project (optional)</label>
              <textarea
                style={{ paddingLeft: "1rem" }}
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                aria-label="Project Description"
              />
            </div>
          </div>
          <div className="submit-container">
            <button type="submit">Send request</button>
            <p className="privacy-text">
              By sending this form, I confirm that I have read and accepted the{" "}
              <a href="/">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </form>

      <div className="testimonial-section">
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <img className="ic_quote" src={ic_quote} alt="Quote Icon" />
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
              <div className="testimonial-author">
                <div className="item__score">
                  <div className="logo">
                    <img
                      decoding="async"
                      height="25"
                      src="https://diffco.us/wp-content/uploads/2024/08/ic_clutch.webp"
                      alt="awards-logo"
                    />
                  </div>
                  <div className="item__score-stars">
                    {[...Array(5)].map((star, i) => (
                      <img
                        key={i}
                        src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v5/ic_star.svg"
                        className={i < testimonial.rating ? "filled-star" : ""}
                      />
                    ))}
                  </div>
                  <div className="item__score-number">{testimonial.rating}</div>
                </div>
                <div className="author-details">
                  <img
                    className="author-profile"
                    src={testimonial.profileImage}
                    alt={testimonial.author}
                  />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContactUs;

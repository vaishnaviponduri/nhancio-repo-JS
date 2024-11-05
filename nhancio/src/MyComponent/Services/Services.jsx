import React from "react";
import "./Services.css";
import s1 from "./Images/s1.png";
import s2 from "./Images/s2.png";
import s3 from "./Images/s3.png";
import s4 from "./Images/s4.png";
import s5 from "./Images/s5.png";
import s6 from "./Images/s6.png";

const servicesData = [
  {
    title: "AI Development",
    description:
      "Our team is experienced in AI, data analysis, machine learning, and implementing cutting-edge technologies.",
    tags: ["LLM", "Tensorflow", "Python", "PyTorch", "Computer Vision"],
    image: s4,
  },
  {
    title: "Mobile Development",
    description:
      "We specialize in developing native and cross-platform mobile applications for iOS and Android.",
    tags: ["Swift", "React Native", "Flutter", "Java", "Kotlin"],
    image: s2,
  },
  {
    title: "Web Development",
    description:
      "Our developers can create web solutions that are tailored to your needs, easy to manage with popular CMS.",
    tags: ["Contentful", "Magento", "WP", "Shopify"],
    image: s6,
  },
  {
    title: "Front-end Development",
    description:
      "We are experienced in building modular, high-performance web applications for corporate clients and startups.",
    tags: ["React", "Angular", "Electron", "Next.js"],
    image: s5,
  },
  {
    title: "Back-end Development",
    description:
      "We are experienced in high-load and complex backend infrastructure development for mobile or web apps and enterprise services.",
    tags: ["Node.js", "Go", "Python", "C#", "Java"],
    image: s3,
  },
  {
    title: "Team Augmentation",
    description:
      "We provide engineers or teams tailored to your project, ensuring skill and compatibility with your goals and culture.",
    tags: ["Cultural fit", "Top 1%", "Instant hire"],
    image: s1,
  },
];

const Services = () => {
  return (
    <div className="main-service-container">
    <div className="container services-container">
      <h2 className="service-text">Services we provide</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="learn-more">Know More</button>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Services;

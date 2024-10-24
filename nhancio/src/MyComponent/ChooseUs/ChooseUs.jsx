import React from 'react';
import './ChooseUs.css';

// Images
import AIDriven from './Images/AI-Driven Research.png';
import dedicatedTeam from './Images/dedicated Team.png';
import AIoptimized from './Images/AI optimized.png';

const ChooseUs = () => {
  // Array of card content
  const cardData = [
    {
      img: AIDriven,
      title: 'AI-Driven Research',
      description:
        'Before embarking on any project, we leverage AI-powered tools to conduct thorough research and gather deep insights. This allows us to fully understand your business needs and craft strategies that elevate your business to the next level.',
    },
    {
      img: dedicatedTeam,
      title: 'Dedicated Team of Experts',
      description:
        'Our team of experts is enhanced by AI, enabling us to offer cutting-edge solutions tailored to your unique requirements. We combine our expertise with AI’s capabilities to deliver strategies that drive success.',
    },
    {
      img: AIoptimized,
      title: 'AI-Optimized Delivery and Management',
      description:
        'We utilize AI-driven project management tools to ensure that your project is delivered on time, with the highest level of quality and efficiency. Our AI-enhanced processes streamline management and guarantee superior outcomes.',
    },
    {
      img: dedicatedTeam,
      title: '24x7 Support',
      description:
        'Our support system is available around the clock, ensuring that your queries and issues are addressed promptly and effectively, keeping your business running smoothly at all times.',
    },
  ];

  return (
    <div className="whyChooseUsSection">
      {/* Why Choose Us Header */}
      <div className="container">
        <h2 className="sectionTitle">Why Choose Us</h2>
        <h3>With so many agencies available, here’s why you should choose us</h3>
      </div>

      {/* Why Choose Us Cards */}
      <div className="container ChooseUsCards">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-3" key={index}>
              <img src={card.img} alt={card.title} />
              <div className="col-12 cardsTitle">
                <h6>{card.title}</h6>
              </div>
              <div className="col-12">
                <p className="ChooseUsCardsPara">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

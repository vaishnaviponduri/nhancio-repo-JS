import React from 'react'
import './ChooseUs.css'

// Images
import AIDriven from './Images/AI-Driven Research.png'
import dedicatedTeam from './Images/dedicated Team.png'
import AIoptimized from './Images/AI optimized.png'

const ChooseUs = () => {
  return (
    <>
      <div class="whyChooseUsSection">
        {/* Why Choose Us Header */}
        <div className="container">
          <h2 class="sectionTitle">Why Choose Us</h2>
          <h3>With so many agencies available, here’s why you should choose us</h3>
        </div>
        {/* Why Choose Us Cards */}
        <div className='container ChooseUsCards'>
          <div className="row">

            {/* Card-1 */}
            <div className="col-3">
              <img src={AIDriven} alt="" />
              <div className="col-12 cardsTitle">
                <h6 >AI-Driven Research</h6>
              </div>
              <div className="col-12">
                <p className='ChooseUsCardsPara ' id='abc'>Before embarking on any project, we leverage AI-powered tools to conduct thorough research and gather deep insights. This allows us to fully understand your business needs and
                  craft strategies that elevate your business to the next level
                </p>
              </div>
            </div>

            {/* Card-2 */}
            <div className="col-3">
              <img src={dedicatedTeam} alt="" />
              <div className="col-12 cardsTitle">
                <h6>Dedicated Team of Experts</h6>
              </div>
              <div className="col-12">
                <p className='ChooseUsCardsPara' id='abc'>Our team of experts is enhanced by AI, enabling us to offer cutting-edge
                  solutions tailored to your unique requirements.
                  We combine our expertise with AI's capabilities to deliver
                  strategies that drive success.
                </p>
              </div>
            </div>

            {/* Card-3 */}
            <div className="col-3">
              <img src={AIoptimized} alt="" />
              <div className="col-12 cardsTitle">
                <h6>AI-Optimized Delivery and Management</h6>
              </div>
              <div className="col-12 ">
                <p className='ChooseUsCardsPara'>We utilize AI-driven project management tools to ensure that your project
                  is delivered on time, with the highest level of quality and efficiency.
                  Our AI-enhanced processes streamline management and guarantee superior
                  outcomes.
                </p>
              </div>
            </div>

            {/* Card-4 */}
            <div className="col-3">
              <img src={dedicatedTeam} alt="" />
              <div className="col-12 cardsTitle">
                <h6>24x7 Support</h6>
              </div>
              <div className="col-12">
                <p className='ChooseUsCardsPara' id='abc'>
                  Our support system is available around the clock, ensuring that your queries
                  and issues are addressed promptly and effectively,
                  keeping your business running smoothly at all times.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ChooseUs


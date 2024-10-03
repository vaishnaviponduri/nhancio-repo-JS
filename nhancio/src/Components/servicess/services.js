import React from "react";
import './service.css';
import workflow from './images/workflow-process-scaled.webp'
import Das from './images/das.webp'
import Wm from './images/wm.avif'
import ad from './images/ad.jpg'
import ai from './images/ai.jpeg'
import de from './images/de.jpeg'



const service= ()=>{
    return(
        <div className="services" id="Services">
            
{/* service-section  */}
{/* <section className="services" id="Services"> */}
  <div className="container">
  <h2>Our Services</h2>
  <div className="service-container">
      <div className="service-box">
        <div className="text-content">
            <h3>AI Workflows</h3>
            <p>Streamline your operations with intelligent workflows powered by AI and data science, optimizing efficiency and decision-making</p>
            <div className="tags">
              <span>Automation</span>
              <span>Machine Learning</span>
              <span>GenAI</span>
              <span>Process Optimization</span>
              <span>RPA</span>
            </div>
        </div>
        <img src={workflow} alt="AI Development"/>
    </div>

    <div className="service-box">
      <div className="text-content">
          <h3>Data Science & Analytics</h3>
          <p>Unlock deeper insights and drive business growth with our AI-powered data science and analytics solutions, tailored to transform data into actionable strategies</p>
          <div className="tags">
            <span>Python</span>
            <span>R</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Tableau</span>
            <span>Predictive Modeling</span>
          </div>
      </div>
      <img src={Das} alt="Mobile Development"/>
  </div>



    <div className="service-box">
      <div className="text-content">
          <h3>Website Development, Enhancement & Maintenance</h3>
          <p>Ensure your website's development, performance, scalability, and reliability with our AI-driven development, enhancement, and maintenance services</p>
          <div className="tags">
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>WordPress</span>
            <span>PHP</span>
            <span>Responsive Design</span>
            <span>SEO</span>
          </div>
      </div>
      <img src={Wm} alt="Back-end Development"/>
  </div>

  <div className="service-box">
    <div className="text-content">
        <h3>Application Development</h3>
        <p>Transform your ideas into high-performing, scalable mobile apps with our AI-powered development services, ensuring seamless user experiences and robust functionality</p>
        <div className="tags">
          <span>Flutter</span>
          <span>React Native</span>
          <span>Java</span>
          <span>Swift</span>
          <span>Kotlin</span>
          <span>.NET</span>
        </div>
    </div>
    <img src={ad} alt="Back-end Development"/>
</div>

      
      
      <div className="service-box">
        <div className="text-content">
            <h3>AI-Driven Marketing Innovations</h3>
            <p>Enhance your marketing efforts with Gen AI content, strategies, including personalized content, predictive analytics, and automated campaigns</p>
            <div className="tags">
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>Chatbots</span>
              <span>Personalization</span>
              <span>Analytics-Driven Campaigns</span>
            </div>
        </div>
        <img src={ai} alt="Back-end Development"/>
      </div>

    

        <div className="service-box">
          <div className="text-content">
              <h3>Design and Content</h3>
              <p>Elevate your brand with AI-enhanced design and content, delivering visually stunning and engaging experiences that resonate with your audience</p>
              <div className="tags">
                <span>Adobe Creative Suite</span>
                <span>Figma</span>
                <span>UX/UI Design</span>
                <span>Copywriting</span>
                <span>Visual Storytelling</span>
                <span>Brand Identity</span> 
                <span>AI tools</span>
              </div>
          </div>
        <img src={de} alt="Team Augmentation"/>
    </div>
     
    
  
</div>
{/* </section> */}
        </div>
        </div>
    )
}

export default service;


import React from 'react'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'
import ChooseUs from '../ChooseUs/ChooseUs'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Services/>
      <ChooseUs/>
      <ContactUs/>
      <OurWork/>
      <Footer/>
    </div>
  )
}

export default HomePage

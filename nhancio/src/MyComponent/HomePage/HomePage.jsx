import React from 'react'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'
import ChooseUs from '../ChooseUs/ChooseUs'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <ChooseUs/>
      <ContactUs/>
      <OurWork/>
      <Footer/>
    </div>
  )
}

export default HomePage

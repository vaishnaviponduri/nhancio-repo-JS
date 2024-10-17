import React from 'react'
import ChooseUs from './MyComponent/ChooseUs/ChooseUs'
import HomePage from './MyComponent/HomePage/HomePage'
import Navbar from './MyComponent/Navbar/Navbar'
import ContactUs from './MyComponent/ContactUs/ContactUs'
import Services from './MyComponent/Services/Services'
const App = () => {
  return (
    <>
    <Navbar/>
      <HomePage/>
      <ChooseUs/>
      <ContactUs/>
      <Services/>
    </>
  )
}

export default App

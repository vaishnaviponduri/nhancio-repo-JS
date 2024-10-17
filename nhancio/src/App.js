import React from 'react'
import HomePage from './MyComponent/HomePage/HomePage'
import Navbar from './MyComponent/Navbar/Navbar'
import ContactUs from './MyComponent/ContactUs/ContactUs'
import Services from './MyComponent/Services/Services'
const App = () => {
  return (
    <>
    <Navbar/>
      <HomePage/>
      <ContactUs/>
      <Services/>
    </>
  )
}

export default App

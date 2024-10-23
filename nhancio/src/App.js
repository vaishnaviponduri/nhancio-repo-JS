import React from "react";
import HomePage from "./MyComponent/HomePage/HomePage";
import Navbar from "./MyComponent/Navbar/Navbar";
import Footer from "./MyComponent/Footer/Footer";
import ContactUs from "./MyComponent/ContactUs/ContactUs";
import Services from './MyComponent/Services/Services'
import Client from "./MyComponent/Clients/Clients";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <ContactUs />
      <Services/>
      <Client/>
      <Footer />
    </>
  );
};

export default App;

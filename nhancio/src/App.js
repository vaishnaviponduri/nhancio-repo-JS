import React from "react";
import ChooseUs from "./MyComponent/ChooseUs/ChooseUs";
import HomePage from "./MyComponent/HomePage/HomePage";
import Navbar from "./MyComponent/Navbar/Navbar";
import Footer from "./MyComponent/Footer/Footer";
import ContactUs from "./MyComponent/ContactUs/ContactUs";
const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <ChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;

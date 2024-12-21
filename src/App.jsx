import React from 'react';
import About from './Components/about/About';
import Navbar from './Components/navbar/Navbar'; // Corrected typo in filename
import Header from './Components/header/Header';
import Portfolio from './Components/portfolio/Portfolio'; // Corrected typo in filename
import Contact from './Components/contact/Contact';
import Experience from './Components/experience/Experience';
import './index.css';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      {/* <Service/> */}
      <Portfolio/>
      <Navbar />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;

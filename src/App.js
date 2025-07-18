import logo from "./globe.png";
import "./App.css";
import Intro from "./Intro";
import Aboutus from "./Aboutus";
import WhatWeDo from "./WhatWeDo";
import Industries from "./Industries";
import Contactus from "./Contactus";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">EDS</span>
        </a>
        <div class="nav-links" data-aos="slide-down" data-aos-delay="200">
          <a href="#services">SERVICES</a>
          <a href="#">CASE STUDIES</a>
          <a href="#industries">INDUSTRIES</a>
          <a href="#">RESOURCES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact" class="contact-btn">
            GET IN TOUCH
          </a>
        </div>
      </nav>
      <Intro class="block" />
      <Aboutus id="about" data-aos="fade-left" />
      <WhatWeDo data-aos="fade-left" id ="services" />
      <Industries data-aos="fade-left" id="industries"/>
      <Contactus id="contact" data-aos="fade-left" />
      <Footer data-aos="fade-left" />
    </div>
  );
}

export default App;

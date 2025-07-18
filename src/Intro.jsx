import React from "react";
import introimg from "./Assets/into-section.jpg";
import "./css/intro.css";

const Intro = () => {
  return (
    <div>
      <div className="hero-section" data-aos="fade-left">
        <div className="overlay gradient-overlay">
          <img src={introimg} alt="Hero Image" class="hero-image" />
        </div>

        <div className="hero-text">
          <h1>Transforming Enterprise Data into Intelligent Action</h1>
          <p>
            Transforming enterprise data into intelligent action empowers
            organizations to make smarter decisions, improve efficiency, enhance
            customer experiences, and gain competitive advantage through
            real-time insights, predictive analytics, and data-driven
            strategies.
          </p>
          <div>
            <a href="#contact" className="learn-more-btn gap-right">
              GET IN TOUCH
            </a>
            <a href="#about" className="learn-more-btn-white">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

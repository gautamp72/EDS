import React from "react";
import "./css/Aboutus.css";
import aboutusimg from "./Assets/aboutus.jpg";

const Aboutus = () => {
  return (
    <div>
      <section class="about-us-section" id="about" data-aos="fade-right">
        <div class="about-us-container">
          <div class="about-text">
            <h2 data-aos="fade-left">About Us</h2>
            <p data-aos="fade-left">
              At EDS, we specialize in transforming enterprise data into
              intelligent action. Our innovative data-driven solutions help
              businesses make smarter decisions, automate processes, and unlock
              meaningful insights that drive growth.
            </p>
          </div>
          <div class="about-image">
            <img src={aboutusimg} alt="About EDS" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;

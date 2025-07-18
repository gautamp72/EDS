import React from "react";
import "./css/industries.css";

const Industries = () => {
  return (
    <div>
      <section class="industries-section" id="industries" data-aos="fade-left">
        <div class="industries-container">
          <h2>Industries We Serve</h2>
          <div class="industry-list">
            <div class="industry-item">
              <i class="fas fa-university"></i>
              <span>Banking & Finance</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-heartbeat"></i>
              <span>Healthcare</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-shopping-cart"></i>
              <span>Retail</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-industry"></i>
              <span>Manufacturing</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-phone-alt"></i>
              <span>Telecommunications</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-graduation-cap"></i>
              <span>Education</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-truck"></i>
              <span>Logistics</span>
            </div>
            <div class="industry-item">
              <i class="fas fa-landmark"></i>
              <span>Government</span>
            </div>
          </div>
          <p class="industry-note">
            Don’t see your industry listed? <a href="#contact">Contact us</a> —
            we’d love to learn how we can help.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Industries;

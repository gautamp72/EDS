import React from "react";
import "./css/Whatwedo.css";

const WhatWeDo = () => {
  return (
    <div>
      <section class="what-we-do-section" id="services" data-aos="fade-right">
        <div class="what-we-do-container">
          <h2>What We Do</h2>
          <div class="cards">
            <div class="card">
              <div class="icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Modern Data Platforms</h3>
              <p>
                Enterprise-grade data lakehouses using Databricks, Snowflake,
                and cloud-native tools.
              </p>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h3>Corporate Training</h3>
              <p>
                Hands-on training in Oracle Cloud, Azure, AWS, GCP, CDMP, TOGAF,
                Databricks and more.
              </p>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3>AI & RPA Solutions</h3>
              <p>
                Custom AI systems, Agentic and RAG chatbots, and automation for
                key industry processes.
              </p>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fas fa-cloud"></i>
              </div>
              <h3>Tech Blogs</h3>
              <p>
                Real-time use cases, data architecture insights, and
                expert-written content on modern platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

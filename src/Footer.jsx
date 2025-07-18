import React from "react";
import "./css/footer.css";
import logo from "./globe.png";

const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
        <div class="footer-container">
          <div class="logo2">
            <i class="fa fa-globe" aria-hidden="true"></i>
            <h3 class="logo-text2">EDS</h3>
          </div>

          <div class="footer-social">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">&copy; 2025 EDS. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;

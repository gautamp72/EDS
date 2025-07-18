import React from "react";
import "./css/contactus.css";

const Contactus = () => {
  return (
    <div>
      <section class="contact-section" id="contact" data-aos="fade-right">
        <div class="contact-container">
          <h2>Contact Us</h2>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contactus;

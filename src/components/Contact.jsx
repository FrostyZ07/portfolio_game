import React from "react";
import "../styles/Contact.css";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  return (
    <div id="contact">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ contact</span>
        </div>
        <div className="contact-container">
          <div className="contact-heading">What's Next?</div>
          <div className="contact-subheading">Get In Touch</div>
          <p className="contact-body">
            I'm currently looking for AI/ML internship. Whether you have a role that might be a fit, want to collaborate on something, or just want to chat about LLMs  my inbox is always open.
          </p>
          <a href="mailto:thanmay1100@gmail.com" className="contact-btn">
            Say Hello
          </a>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;

import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h2>Phone</h2>
              <p>+91 9025024523</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h2>Email</h2>
              <p>yaseenvahi@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <div>
              <h2>Address</h2>
              <p>123 saibaba colony, Coimbatore, India</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

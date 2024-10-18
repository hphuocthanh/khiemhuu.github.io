// src/components/Contact.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
        <div className="container">
        <h2>Contact Me</h2>
        <p className="contact-description">
            Feel free to reach out via any of the following platforms or send me an email. I am open to collaborations, job opportunities, or just a friendly chat!
        </p>
        </div>
        <div className="contact-icons">
        <a href="https://www.facebook.com/huukhiemk74" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </a>
        <a href="https://www.instagram.com/khiem.jpg/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href="https://www.instagram.com/khiemnghuu" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Personal Instagram
        </a>
        <a href="https://www.linkedin.com/in/huu-khiem-nguyen-9a56a8197/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/khiemhuu" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaDiscord /> Discord (hkhiem)
        </a>
        <a href="mailto:khiema8k99@gmail.com">
          <FaEnvelope /> Personal Email
        </a>
        <a href="mailto:hkn215@uowmail.edu.au">
          <FaEnvelope /> Work Email
        </a>
        <a href="https://huukhiemnguyen.me" target="_blank" rel="noopener noreferrer">
          <FaGlobe /> Website
        </a>
        </div>
    </div>
  );
};

export default Contact;

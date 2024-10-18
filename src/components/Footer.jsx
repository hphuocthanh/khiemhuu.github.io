import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/huukhiemk74" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/khiem.jpg/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.instagram.com/khiemnghuu" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/huu-khiem-nguyen-9a56a8197/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/khiemhuu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="https://huukhiemnguyen.me" target="_blank" rel="noopener noreferrer">
          <FaGlobe />
        </a>
      </div>
      <p className="footer-text">
        © 2024 Huu Khiem Nguyen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
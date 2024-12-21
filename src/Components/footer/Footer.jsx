import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn  } from "react-icons/fa";
import './footer.css';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Viswanand</a>
      <div className="footer__links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiencce">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">Portifolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
      <div className="footer__socials">
         <a 
            href="https://github.com/Viswabaddala16" 
            target="_blank" 
            rel="noopener noreferrer">
            <FaGithub />
          </a>
        <a href="https://www.instagram.com/viswabaddala/" target='_blank' rel="noopener noreferrer"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/viswanand-baddala-1a382a217/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn  /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy right; Viswanand Portfolio. All Rights Are Reserved</small>
      </div>

      
    </footer>
  )
}

export default Footer;

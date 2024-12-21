import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a 
        href="https://www.linkedin.com/in/viswanand-baddala-1a382a217/" 
        target="_blank" 
        rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a 
        href="https://github.com/Viswabaddala16" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a 
        href="https://www.instagram.com/viswabaddala/" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaInstagramSquare />
      </a>
    </div>
  );
}

export default HeaderSocials;

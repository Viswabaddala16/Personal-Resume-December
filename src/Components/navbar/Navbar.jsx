import React from 'react'
import './navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
const Navbar = () => {
  const[activeNav,setActiveNav] = useState("#");
  return (
    <nav>
      <a href='#'  className={activeNav === "#" ? "active" : ""} ><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} ><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><IoBookOutline/></a>
      <a href='#portifolio' onClick={() => setActiveNav("#portifolio")} className={activeNav === "#services" ? "active" : ""}><RiServiceFill/></a>
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar;

import React from 'react'
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../Assets/profile photo.jpeg';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='Info'>
          <h5 >Hello I'm</h5>
          <h1>Viswanand</h1>
          <h4 className="text-light">Full Stack Developer</h4>
          <CTA/>
        </div>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

import React from 'react';
import ME from '../../Assets/profile1.jpg';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import './about.css';
const About = () => {
  return (
    <section id="about">
      <h5>Get Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>8 Projects</small>
            </article>
          </div>
          <p>A skilled Full Stack developer is adept at crafting captivating and
            interactive web experiences. With expertise in HTML, JavaScript,and
            CSS, React Js,Node JS ,MongoDB ,Tailwind Css ,they have the ability to transform design concepts into
            responsive,user-friendly websites.Their portfolio showcases a diverse 
            range of projects, demonstrating their prowess in creating visually 
            appealing user interfaces, seamlessly integrating interactive features
            through JavaScript,and ensuring the content's stylish presentation
            through CSS.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;

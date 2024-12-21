import React from 'react';
import './service.css';
import {BiCheck} from 'react-icons/bi';

const Service = () => {
  return (
    <section id='service'>
        <h5>What I Offer</h5>
        <h2>Service</h2>
        <div className="container services__container">
            <article className='service'>
                <div className="service__head">
                   <h3>WEB DEVELOPMENT</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <BiCheck className= "service__list-icon"/>
                        <p>Developed a finance tracker and podcast website.</p>
                    </li>
                    <li>
                        <BiCheck className= "service__list-icon"/>
                        <p>Integrating dynamic content and enhancing user engagement.</p>
                    </li>
                    <li>
                        <BiCheck className= "service__list-icon"/>
                        <p>Technologies and Tools: "Proficient in HTML5, CSS3, JavaScript, React.js,</p>
                    </li>
                    <li>
                        <BiCheck className= "service__list-icon"/>
                        <p>Combining frontend development with UI/UX design principles.</p>
                    </li>
                    
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Service;

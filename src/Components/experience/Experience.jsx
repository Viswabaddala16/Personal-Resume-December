import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className=" container experience__container">
        <div className="frontend__experience">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>REACT JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article >
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article >

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience

import React from 'react';
import developerResume from '../../Assets/developerResume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={developerResume} download className='btn '>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA

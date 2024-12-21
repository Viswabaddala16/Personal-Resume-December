import React, { useRef } from 'react';
import { MdEmail } from "react-icons/md";
import { PiMessengerLogoFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai"; // LinkedIn Icon
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        'service_q38yqbu', 
        'template_p593341', 
        form.current, 
        'irq8xMK_7PnktA6zy'
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset(); // Clear the form fields
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Viswabaddala@gmail.com</h5>
            <a href='mailto:viswabaddala@gmail.com' target="_blank" rel="noopener noreferrer">Send A Message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Viswa Baddala</h5>
            <a href='https://www.linkedin.com/in/viswanand-baddala-1a382a217/' target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </article>
          {/* <article className='contact__option'>
            <PiMessengerLogoFill className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Viswa Baddala</h5>
            <a href='https://m.me/viswabaddala' target="_blank" rel="noopener noreferrer">Send A Message</a>
          </article> */}
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+6374853151</h5>
            <a href='https://api.whatsapp.com/send?phone=6374853151' target="_blank" rel="noopener noreferrer">Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

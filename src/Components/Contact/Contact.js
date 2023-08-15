import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uqki7w4', 'template_ad2vdrg', form.current, '6cdYrgQSUnm9_Aw-T')
      .then((result) => {
        document.getElementById('response').innerHTML = 'Message sent successfully'
      }, (error) => {
        document.getElementById('response').innerHTML = { error }
      });

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-icon' />
            <h4>Email</h4>
            <h5>Nandani Pandey</h5>
            <a href="mailto:nandanipandey2004@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <BsInstagram className='contact-icon' />
            <h4>Instagram</h4>
            <h5>Nandani Pandey</h5>
            <a href="https://instagram.com/nandanii_2711?igshid=MmU2YjMzNjRlOQ==" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 7258920403</h5>
            <a href="http://wa.me/+917258920403" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
          <div id='response'></div>
        </form>
      </div>
    </section>
  )
}

export default Contact
import { useState } from 'react'
import wheel from "../../assets/images/wheel.png"
import './Contact.css'
import Header from '../../components/header/Header'

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }
  const name_regex = /^[a-zA-Z][a-zA-Z0-_]{3,23}$/;
  const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return (
    <>
      <section className='contact-container'>
        <h1>Contact Us</h1>
        <h2>Feel free to contact us with questions, potencial partnerships or media inquiries</h2>
        <div className='form'>
          <div className="inputs">
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="text" name="email" id="email" placeholder='E-mail' />
          </div>
          <textarea name="" id="" placeholder='Your text'></textarea>
          <p>Leave us a quick message <i class="fa-regular fa-message"></i></p>
          <button className='btn' onClick={handleSubmit}>SUBMIT</button>
        </div>
      </section>
      <div className="social-container">
        <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
      </div>
      <img src={wheel} alt="" className={`wheel ${isSubmitted ? 'wheel-animation' : ''}`} />

    </>
  )
}

export default Contact
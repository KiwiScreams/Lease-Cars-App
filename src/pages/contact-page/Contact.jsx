import { useEffect, useRef, useState } from 'react'
import wheel from "../../assets/images/wheel.png"
import './Contact.css'
import Header from '../../components/header/Header'

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const name_regex = /^[a-zA-Z][a-zA-Z0-_]{3,23}$/;
  const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name_regex.test(name)) {
      errors.name = 'Invalid username';
    }
    if (!email_regex.test(email)) {
      errors.email = 'Invalid E-mail address';
    }
    if (message.trim() === '') {
      errors.message = 'Message is required';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setSuccessMessage('Message sent successfully!')
      setTimeout(() => {
        setIsSubmitted(false);
        setSuccessMessage('');
        setName('');
        setEmail('');
        setMessage('');
      }, 3000);
    }
  }
  return (
    <>
      <section className='contact-container'>
        <h1>Contact Us</h1>
        <h2>Feel free to contact us with questions, potencial partnerships or media inquiries</h2>
        <div className='form'>
          <div className="inputs">
            <div className="input">
              <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="input">
              <input type="text" name="email" id="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>
          <div className="input input-full">
            <textarea name="" id="" placeholder='Your text' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          {isSubmitted ? (
            <p style={{ color: 'green' }}>{successMessage} <i className="fa-regular fa-square-check"></i></p>
          ) : (
            <p>Leave us a quick message <i className="fa-regular fa-message"></i></p>
          )}
          <button className='btn' onClick={handleSubmit}>SUBMIT</button>
        </div>
      </section>
      <div className="social-container">
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
      </div>
      <img src={wheel} alt="" className={`wheel ${isSubmitted ? 'wheel-animation' : ''}`} />

    </>
  )
}

export default Contact
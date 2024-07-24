import { useState } from 'react'
import wheel from "../../assets/images/wheel.png"
import './Contact.css'
import Header from '../../components/header/Header'

function Contact() {
  return (
    <>
      <section className='contact-container'>
        <h1>Contact Us</h1>
        <h2>Feel free to contact us with questions, potencial partnerships or media inquiries</h2>
        <form>
          <div className="inputs">
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="text" name="email" id="email" placeholder='E-mail' />
          </div>
          <textarea name="" id="" placeholder='Your text'></textarea>
          <button className='btn'>SUBMIT</button>
        </form>
      </section>
      {/* <img src={wheel} alt="" className='wheel'/> */}

    </>
  )
}

export default Contact
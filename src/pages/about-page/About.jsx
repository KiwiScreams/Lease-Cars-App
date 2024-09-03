import { useState } from 'react'
import './About.css'
import Header from '../../components/header/Header'
function AboutUs() {
  return (
    <>
      <Header />
      <section className="about _flex">
        <div className='about-section'>
          <div className="inner-container">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolores. Sapiente accusantium voluptas, doloribus sequi similique eius porro, nihil, dolore voluptates veritatis minima sit voluptatibus. Eius laboriosam et maxime a.</p>
            <div className="skills">
              <span><i className="fa-solid fa-temperature-quarter"></i></span>
              <span><i className="fa-solid fa-gauge"></i></span>
              <span><i className="fa-solid fa-bolt"></i></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
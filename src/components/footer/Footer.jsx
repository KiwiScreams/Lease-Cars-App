import { useState } from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import googlePlay from "../../assets/images/google-play.svg"
import appStoe from "../../assets/images/app-store.svg"

function Footer() {
  return (
    <>
      <footer>
        <section className='footer-container'>
          <ul>
            <h2 className='main-li'>Products</h2>
            <li><NavLink to="/">Used</NavLink></li>
            <li><NavLink to="/">New</NavLink></li>
            <li><NavLink to="/">Sell your car</NavLink></li>
          </ul>
          <ul>
            <h2 className='main-li'>Resources</h2>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">FAQ</NavLink></li>
            <li><NavLink to="/">Contact us</NavLink></li>
          </ul>
          <ul>
            <h2 className='main-li'>Work With TrueCar</h2>
            <li><NavLink to="/">Dealers</NavLink></li>
            <li><NavLink to="/">Partners</NavLink></li>
          </ul>
          <ul>
            <h2 className='main-li'>About</h2>
            <li><NavLink to="/">About us</NavLink></li>
            <li><NavLink to="/">Team</NavLink></li>
            <li><NavLink to="/">Careers</NavLink></li>
          </ul>
        </section>
        <section className='_flex img'>
          <NavLink to="/"><img src={appStoe} alt="" /></NavLink>
          <NavLink to="/"><img src={googlePlay} alt="" /></NavLink>
        </section>
        <ul className='_flex ul'>
          <li><NavLink to="/">Terms of Service</NavLink></li>
          <li><NavLink to="/">Privacy Policy</NavLink></li>
          <li><NavLink to="/">Do Not Sell My Personal Information</NavLink></li>
        </ul>
        <ul>
          <h2 className='main-li main-h2'>Creator About</h2>
          <div className='_flex'>
            <li>Created by <a href="https://github.com/KiwiScreams" target='_blank' id='SLM'><span>S</span><span>L</span><span>M</span></a>  <i className="fa-brands fa-github"></i></li>
            <li><a href="https://www.figma.com/community/file/1216769543134582897/lease-cars?searchSessionId=lysw1stq-xlbfkzhduut" target='_blank'>Design in Figma</a>  <i className="fa-brands fa-figma"></i></li>
          </div>
        </ul>
      </footer>
    </>
  )
}

export default Footer
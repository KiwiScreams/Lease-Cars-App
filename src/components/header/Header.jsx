import { useState } from 'react'
import logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import Home from '../../pages/home-page/Home'
import AboutUs from '../../pages/about-page/About'
import Contact from '../../pages/contact-page/Contact'
import "./Header.css"
function Header() {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <>
      <header className={color ? 'header header-bg' : 'header'}>
        <h1><NavLink to="/"><img src={logo} alt="logo" /></NavLink></h1>
        <nav>
          <i className="fa-solid fa-bars-staggered bars"></i>
          <ul className='_flex header-ul'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>HOME</NavLink></li>
            <li><NavLink to="/newcars" className={({ isActive }) => isActive ? "link active" : "link"}>NEW CARS</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>ABOUT US</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>CONTACT US</NavLink></li>
          </ul>
        </nav>
        <div className="nav-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className='count'>0</span>
        </div>
      </header >
    </>
  )
}

export default Header
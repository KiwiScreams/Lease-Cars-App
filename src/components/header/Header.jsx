import { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header
        className={color ? "header header-bg" : "header"}
        style={{
          backgroundColor: location.pathname === "/" ? "transparent" : "black",
        }}
      >
        <h1>
          <NavLink to="/" onClick={handleScrollToTop}>
            <img src={logo} alt="logo" />
          </NavLink>
        </h1>
        <nav>
          <i className="fa-solid fa-bars-staggered bars"></i>
          <ul className="_flex header-ul">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                onClick={handleScrollToTop}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newcars"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                onClick={handleScrollToTop}
              >
                NEW CARS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                onClick={handleScrollToTop}
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                onClick={handleScrollToTop}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

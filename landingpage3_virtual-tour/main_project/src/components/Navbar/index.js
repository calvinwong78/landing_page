import React, {useState}from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import images2 from "../../img/monsterar-white.png";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
  return (
    <div className="headers-1">
      <nav className="navbar">
        <a href="/" className="logos">
          <img src={images2} alt="react logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: "#ffffff" }} />) : <FaBars size={30} style={{ color: "#ffffff" }} />}
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <Link  to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          </li>
         
          <li className="nav-item">
          <Link  to="features" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>features</Link>
          </li>
          <li className="nav-item">
          <Link  to="industries" spy={true} smooth={true} offset={180} duration={500} onClick={closeMenu}>Industries</Link>
          </li>
          <li className="nav-item">
          <Link  to="Portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Portfolio</Link>
          </li>
          <li className="nav-item">
          <Link  to="forms" spy={true} smooth={true} offset={-210} duration={500} onClick={closeMenu}>Free Trial</Link>
          </li>
          <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} offset={-180} duration={500} onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React, {useState}from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import images2 from "../../img/arlogo.png";
import {Link} from 'react-scroll';


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
            {click ? (<FaTimes size={30} style={{ color: "#000000" }} />) : <FaBars size={30} style={{ color: "#000000" }} />}
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <Link  to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          </li>
         
          <li className="nav-item">
          <Link  to="gallery" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Portfolio</Link>
          </li>
          
          <li className="nav-item">
          <Link  to="hiw" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>How it Works</Link>
          </li>
          
          <li className="nav-item">
          <Link to="package" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu}>Package</Link>
          </li>

          <li className="nav-item-1">
          <Link to="forms" spy={true} smooth={true} offset={-60} duration={500} onClick={closeMenu}>Free Trial</Link>
          </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

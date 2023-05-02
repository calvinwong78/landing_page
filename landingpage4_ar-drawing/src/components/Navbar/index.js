import React, {useState}from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import images2 from "../../img/ardrawing.png";
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
            {click ? (<FaTimes size={30} className="hamburgermb" />) : <FaBars size={30} className="hamburgermb" />}
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <Link  to="home" spy={true} smooth={false} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          </li>
         
          <li className="nav-item">
          <Link  to="Themes" spy={true} smooth={false} offset={-50} duration={500} onClick={closeMenu}>Themes</Link>
          </li>
          
          <li className="nav-item">
          <Link  to="buy" spy={true} smooth={false} offset={10} duration={500} onClick={closeMenu}>Option</Link>
          </li>
          
          <li className="nav-item">
          <Link to="gallery" spy={true} smooth={false} offset={-100} duration={500} onClick={closeMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
          <Link to="review" spy={true} smooth={false} offset={-180} duration={500} onClick={closeMenu}>Reviews</Link>
          </li>
          <li className="nav-item">
          <Link to="forms" spy={true} smooth={false} offset={-90} duration={500} onClick={closeMenu}>Free Trial</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

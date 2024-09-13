import React from 'react';
import { SiCentos } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faBriefcase, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
         <SiCentos className='nav-icon'/>
       

        </div>

        <div className="navbar-center">
          <h1 className="logo-text">LOGO</h1>
        </div>

        <div className="navbar-right">
      
          <FontAwesomeIcon icon={faSearch} className="nav-icon" />
        
          <FontAwesomeIcon icon={faHeart} className="nav-icon" />

          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
        
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
        
        
            ENG <FontAwesomeIcon icon={faChevronDown} />
         </div>
      </nav>

  
      <nav className="bottom-navigation">
        <ul className="nav-links">
          <li className="nav-item">SHOP</li>
          <li className="nav-item">SKILLS</li>
          <li className="nav-item">STORIES</li>
          <li className="nav-item">ABOUT</li>
          <li className="nav-item">CONTACT US</li>
        </ul>
      </nav>
      <div className='middle'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus sclerisque.Dolor integer scleresque nibh amet mi ut elementum dolor</p>
      </div>
    </div>
  );
};

export default Navbar;

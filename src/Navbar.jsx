import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes  = "navlinks";

    if (navLinkOpen) {
      classes += " active"
    }

    return classes
  }

  return (
   <navbar>
      <div className="logo">
        <i className='fa fa-laptop'></i>
        <h4>Scot Newbury</h4>
      </div>
      <ul className={renderClasses()}>
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/about">About</Link></li>
        <li className="link"><Link to="/projects">Projects</Link></li>
        <li className="link"><Link to="/contactme">Contact Me</Link></li>
      </ul>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
  </navbar>
  )
}

export default Navbar;
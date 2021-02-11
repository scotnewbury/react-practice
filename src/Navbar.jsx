import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => (
  <div className="nav">
    <ul className="menu">
      <li className="logo"><Link to="/">Scot Newbury</Link></li>
      <li className="item"><Link to="/about">About</Link></li>
      <li className="item"><Link to="/projects">Projects</Link></li>
      <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
  </div>
);

export default Navbar;
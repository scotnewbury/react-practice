import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.js';

const NavBar = () => (
  <div class="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>
  </div>
);

export default NavBar;
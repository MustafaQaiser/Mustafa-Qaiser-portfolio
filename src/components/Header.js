// /src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../css/HeaderStyles';

const Header = () => {
  const hideMenuPane = () => {
    const checkbox = document.getElementById('openmenu');
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  return (
    <>
    <HeaderContainer>
      {/* <Link to="/">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link> */}
         <div class="menu-container">
  
  <input type="checkbox" id="openmenu" class="hamburger-checkbox"/>
  
  <div class="hamburger-icon">
    <label for="openmenu" id="hamburger-label">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>    
  </div>

    <div class="menu-pane">
      
      <nav>
        <ul class="menu-links">
          <li><Link to="/" onClick={hideMenuPane}>My Profile</Link></li>
          <li><Link to="/skills" onClick={hideMenuPane}>Skills</Link></li>
          <li><Link to="/experience" onClick={hideMenuPane}>Experience</Link></li>
          {/* <li><Link to="/projects" onClick={hideMenuPane}>Projects</Link></li> */}
          <li><Link to="/contact" onClick={hideMenuPane}>Contact</Link></li>
         
        </ul>
        
        
      </nav>
    </div>
  
</div>
    </HeaderContainer>
    </>
  );
};

export default Header;

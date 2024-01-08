// /src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../css/HeaderStyles';

const Header = () => {
  return (
    <>
    <HeaderContainer>
      <Link to="/">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </HeaderContainer>
    </>
  );
};

export default Header;

import React from 'react';
import { AboutContainer } from '../css/AboutStyles';
import myprofilepic from '../assets/IMG_7378.jpg'
const About = () => {
  return (
    <AboutContainer>
      <h2>My Profile:</h2>
      <img src={myprofilepic} alt="Profile" />
      <div>
        <h2>Mustafa Qaiser</h2>
        <p>MERN Stack Developer</p>
        <p>Studied from Lahore Garrison University</p>
        <p>
          As a Software Engineer, I want to develop my skill set according to global best practices.
          I would love to work in a cross-cultural environment across the globe. International
          opportunities will broaden my horizon as a software engineer.
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;

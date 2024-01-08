// /src/components/Contact.js
import React from 'react';
import { ContactContainer } from '../css/ContactStyles';

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <p>Phone: 03247727786</p>
      <p>Email: mustafaqaiser78@gmail.com</p>
      <a href="linkedin.com/in/mustafa-qaiser-1bbb4a247" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/MustafaQaiser" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </ContactContainer>
  );
};

export default Contact;

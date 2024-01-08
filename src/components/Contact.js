// /src/components/Contact.js
import React from 'react';
import { ContactContainer } from '../css/ContactStyles';

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <p>Phone: +123456789</p>
      <p>Email: your.email@example.com</p>
      <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </ContactContainer>
  );
};

export default Contact;

// /src/styles/ContactStyles.js
import styled from 'styled-components';

export const ContactContainer = styled.div`
padding: 40px;
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    display: block;
    margin-bottom: 10px;
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

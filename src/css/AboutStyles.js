// /src/styles/AboutStyles.js
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  font-family: cursive;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    border-radius: 50%;
    margin-right: 20px;
    width: 40%;
    max-width: 200px; /* Set a max-width for smaller screens */
    height: auto;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  div {
    max-width: 60%;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 10px;
    }
  }
`;

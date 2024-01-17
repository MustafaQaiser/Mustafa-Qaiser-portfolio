import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  font-family: Arial;
text-align:center;
 

  img {
    border-radius: 50%;
    
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

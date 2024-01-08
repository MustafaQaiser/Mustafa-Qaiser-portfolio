// /src/styles/AboutStyles.js
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: 20px;
    width:40%;
    height:50vh
  }

  div {
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 10px;
    }
  }
`;

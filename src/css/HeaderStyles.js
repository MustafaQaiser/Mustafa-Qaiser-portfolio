// /src/styles/HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 100;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

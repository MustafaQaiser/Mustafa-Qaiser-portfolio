// /src/styles/HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #4169e1, #6495ed, #ff69b4);
  color: #fff;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
    font-size: 24px;
    color: #fff;

    @media (max-width: 768px) {
      display: block;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    cursor: pointer;

    &:hover {
      color: #Ff00ff;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

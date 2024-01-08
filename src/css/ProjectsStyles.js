import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  font-family: Arial;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Optional: Center items on smaller screens */
  }

  div {
    margin-bottom: 20px;

    img {
      max-width: 100%;
      border-radius: 5px;
    }

    h3 {
      font-size: 20px;
      margin: 10px 0;
    }

    p {
      color: #555;
      margin-bottom: 10px;
    }

    a {
      display: inline-block;
      background-color: #3498db;
      color: #fff;
      font-size: 14px;
      padding: 5px 10px;
      margin-top: 10px;
      border-radius: 5px;
      text-decoration: none;
    }
  }
`;

import styled from "styled-components";

const Body = styled.main`
  box-sizing: border-box;
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px 3px;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  min-height: 100vh;
  color: #333333;
  & h1 {
    color: var(--accent-color);
    margin-bottom: 18px;
  }
  & ul {
    padding-left: 20px;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:visited {
    color: --accent-color;
  }
  @media (max-width: 650px) {
    border: none;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Body;

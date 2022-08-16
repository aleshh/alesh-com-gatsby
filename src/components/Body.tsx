import styled from "styled-components";

const Body = styled.main`
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3px;
  padding-right: 3px;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  min-height: 100vh;
  color: #333333;
  & h1 {
    color: blue;
    margin-bottom: 18px;
  }
  & ul {
    padding-left: 20px;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:visited {
    color: blue;
  }
  @media (max-width: 650px) {
    border: none;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default Body;

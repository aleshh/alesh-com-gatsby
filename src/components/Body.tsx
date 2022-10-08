import React from "react";
import styled from "styled-components";
import { ghostCursor } from "../utils/ghostCursor";

const Body = styled((props: any) => {
  React.useEffect(function cursor() {
    ghostCursor();
  }, []);

  return <div className={props.className}>{props.children}</div>;
})`
  box-sizing: border-box;
  max-width: 700px;
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
    background-color: var(--highlight-color);
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

import React from "react";
import styled from "styled-components";
import { ghostCursor } from "../utils/ghostCursor";

const numbers = Array(1000)
  .fill("")
  .map((el, i) => <div>{i}</div>);

const Numbers = styled((props: any) => {
  return <p className={props.className}>{numbers}</p>;
})`
  position: absolute;
  left: -40px;
  height: 100%;
  overflow: hidden;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 780px) {
    display: none;
  }
`;

const Body = styled((props: any) => {
  React.useEffect(function cursor() {
    ghostCursor();
  }, []);

  return (
    <main className={props.className}>
      <Numbers />
      <div>{props.children}</div>
    </main>
  );
})`
  position: relative;
  box-sizing: border-box;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px 18px 10px;
  border-left: 1px solid #cccccc;
  min-height: 100vh;
  color: #333333;
  & h1 {
    color: var(--accent-color);
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
  @media (max-width: 710px) {
    border: none;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Body;

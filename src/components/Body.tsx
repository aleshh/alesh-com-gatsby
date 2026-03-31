import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { ghostCursor } from "../utils/ghostCursor";

const numbers = Array(256)
  .fill("")
  .map((el, i) => <div>{i + 1}</div>);

const Numbers = styled((props: any) => {
  return <div className={props.className}>{numbers}</div>;
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
    <div className={props.className}>
      <Numbers />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
})`
  position: relative;
  box-sizing: border-box;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px 42px 10px;
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

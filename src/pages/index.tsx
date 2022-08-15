import React from "react";
import "./index.css";
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
  }
`;

export default function IndexPage() {
  return (
    <>
      <Body>
        <br />
        <h1>Alesh Houdek</h1>
        <br />
        <h2>I'm a web developer. Mostly React. Not too much.</h2>
        <br />
        <p>
          Just tossing this together because my old site requires an old version
          of PHP, and my web host is bugging me about it (actually, I think
          they're now charging me $5 a month or something extra to support it??)
          and it's not worth upgrading.
        </p>
        <br />
        <p>
          Haha, I'm leaving this deliberately unfinished,{" "}
          <a href="mailto:mail@alesh.com?subject=Mail from alesh.com">
            email me
          </a>{" "}
          if it's been a long time and you think there's something I should add
          here.
        </p>
      </Body>
    </>
  );
}

import React from "react";
import "./index.css";
import styled from "styled-components";
import { GitHub, Twitter, Mail, Instagram, Linkedin } from "react-feather";

const iconProps = {
  size: 14,
  // strokeWidth: 1,
};

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

const IconWrapper = styled.span`
  display: inline-block;
  line-height: 10px;
  color: blue;
  border-radius: 50%;
  padding: 4px;
  border: 1px solid gray;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
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
        <h2>A few of my recent projects</h2>
        <ul>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=alesh-houdek.steno-light-theme"
              target="_blank"
            >
              Steno theme for VSCode
            </a>
            . Dark mode is{" "}
            <a
              href="https://tidbits.com/2019/05/31/the-dark-side-of-dark-mode/"
              target="_blank"
            >
              bad
            </a>{" "}
            for you. Green{" "}
            <a href="https://www.shiftelearning.com/blog/how-do-colors-influence-learning">
              boosts
            </a>{" "}
            concentration. Why do you think accountants' steno pads are green?
          </li>
          <li>
            <a href="https://randofont.alesh.com" target="_blank">
              RandoFont
            </a>
            . Find a font for your next project.
          </li>
          <li>
            <a href="https://albums.alesh.com/" target="_blank">
              Album Spinner
            </a>
            . Spotify shuffles by song. This shuffles by album. Unfortunately,
            it's a hard-coded list of albums. At least they're not terrible?
          </li>
        </ul>
        <br />
        <p>
          Haha, I'm leaving this deliberately unfinished,{" "}
          <a href="mailto:mail@alesh.com?subject=Mail from alesh.com">
            email me
          </a>{" "}
          if it's been a long time and you think there's something I should add
          here.
        </p>
        <br />
        <p>
          <IconWrapper>
            <a href="https://github.com/aleshh">
              <GitHub {...iconProps} />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="https://www.linkedin.com/in/alesh/">
              <Linkedin {...iconProps} />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="https://www.instagram.com/alesh/">
              <Instagram {...iconProps} />
            </a>
          </IconWrapper>

          <IconWrapper>
            <a href="mailto:mail@alesh.com?subject=Mail sent from alesh.com">
              <Mail {...iconProps} />
            </a>
          </IconWrapper>
        </p>
      </Body>
    </>
  );
}

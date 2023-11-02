import React from "react";
import styled from "styled-components";
import { HeadFC } from "gatsby";
import { GitHub, Mail, Instagram, Linkedin } from "react-feather";
import "./index.css";
import Body from "../components/Body";

const iconProps = {
  size: 14,
  "aria-hidden": true,
};

const IconLink = styled.a`
  display: inline-block;
  line-height: 18px;
  width: 18px;
  text-align: center;
  color: var(--accent-color);
  border-radius: 50%;
  padding: 4px;
  border: 1px solid var(--accent-color);
  margin-right: 8px;
  & svg {
    position: relative;
    top: 2px;
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: black;
    border-color: black;
    background: var(--highlight-color);
    &&:visited {
      color: black;
    }
  }
`;

const VisuallyHidden = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
  }
`;

const Emoji = styled.span`
  font-size: 24px;
  line-height: 0;
  position: relative;
  top: 2px;
  margin-right: 0.25em;
`;

const IndexPage: React.FC = () => (
  <Body>
    <h1>Alesh Houdek</h1>
    <h2>I'm a web developer. Mostly React. Not too much.</h2>
    <p>
      I care about <Emoji>🚀</Emoji>performance, <Emoji>🧑‍🦽</Emoji>
      accessibility, and <Emoji>🧰</Emoji>clean code. Love working with UX
      designers but roll my own when necessary. Currently working at Amazon.
      Svelte-curious. This quick n dirty website is made with Gatsby.
    </p>
    <h2>A few recent projects</h2>
    <ul>
      <li>
        <a href="https://forker.alesh.com/" target="_blank">
          Forker
        </a>{" "}
        → A front-end for Pitchfork's new album reviews that shows the rating on
        the list page. This was a chance to play around with Next, and a
        url-first approach to state management, and Pitchfork's undocumented
        API. (Currently working on filtering!)
      </li>
      <li>
        <a href="https://albums.alesh.com/" target="_blank">
          Album Spinner
        </a>{" "}
        → Shows a random album and allows shuffling and opening in Spotify. The
        interesting bits are the adaptive color palette and the Spotify API
        integration.
      </li>
      <li>
        <a href="https://randofont.alesh.com" target="_blank">
          RandoFont
        </a>{" "}
        → Find a font for your next project. Uses the Google Fonts API.
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=alesh-houdek.steno-light-theme"
          target="_blank"
        >
          Steno theme for VSCode
        </a>{" "}
        → Dark mode is{" "}
        <a
          href="https://tidbits.com/2019/05/31/the-dark-side-of-dark-mode/"
          target="_blank"
        >
          bad
        </a>
        . Green{" "}
        <a href="https://www.shiftelearning.com/blog/how-do-colors-influence-learning">
          boosts
        </a>{" "}
        concentration. Maybe. Anyway, why do you think accountants' steno pads
        are green?
      </li>
    </ul>
    <p>
      <a href="mailto:mail@alesh.com?subject=Mail from alesh.com">Email me</a>{" "}
      if you want to chat. You can also see what this site looked like circa{" "}
      <a href="https://alesh.com/old/">2016</a> and{" "}
      <a href="http://2021.alesh.com">2021</a>.
    </p>
    <section>
      <IconLink href="https://github.com/aleshh">
        <GitHub {...iconProps} />
        <VisuallyHidden>GitHub</VisuallyHidden>
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/alesh/">
        <Linkedin {...iconProps} />
        <VisuallyHidden>LinkedIn</VisuallyHidden>
      </IconLink>
      <IconLink href="https://www.instagram.com/alesh/">
        <Instagram {...iconProps} />
        <VisuallyHidden>Instagram</VisuallyHidden>
      </IconLink>
      <IconLink href="mailto:mail@alesh.com?subject=Mail sent from alesh.com">
        <Mail {...iconProps} />
        <VisuallyHidden>Email</VisuallyHidden>
      </IconLink>
    </section>
  </Body>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Alesh Houdek</title>;

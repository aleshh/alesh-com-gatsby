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

const IndexPage: React.FC = () => (
  <>
    <Body>
      <h1>Alesh Houdek</h1>
      <h2>I'm a web developer. Mostly React. Not too much.</h2>
      <p>
        Just tossing this together because my old site requires an old version
        of PHP, and my web host is bugging me about it (actually, I think
        they're now charging me $5 a month or something extra to support it??)
        and it's not worth upgrading.
      </p>
      <h2>A few recent projects</h2>
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
          </a>
          . Green{" "}
          <a href="https://www.shiftelearning.com/blog/how-do-colors-influence-learning">
            boosts
          </a>{" "}
          concentration. Maybe. Anyway, why do you think accountants' steno pads
          are green?
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
      <p>
        Haha, I'm leaving this deliberately unfinished,{" "}
        <a href="mailto:mail@alesh.com?subject=Mail from alesh.com">email me</a>{" "}
        if it's been a long time and you think there's something I should add
        here.
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
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Alesh Houdek</title>;

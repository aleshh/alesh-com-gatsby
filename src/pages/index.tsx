import React from "react";
import styled from "styled-components";
import { HeadFC } from "gatsby";
import { GitHub, Mail, Instagram, Linkedin } from "react-feather";
import "./index.css";
import Body from "../components/Body";
import MarkdownPage from "../components/MarkdownPage";
import homeContent from "../content/home.md";

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
  <Body>
    <MarkdownPage content={homeContent} />
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

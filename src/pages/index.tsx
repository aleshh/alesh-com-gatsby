import React from "react";
import styled from "styled-components";
import { HeadFC } from "gatsby";
import { GitHub, Mail, Instagram, Linkedin } from "react-feather";
import "./index.css";
import Body from "../components/Body";
import homeContent from "../content/home.md";
import { renderMarkdown } from "../utils/renderMarkdown";

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

const MarkdownContent = styled.div`
  & .emoji {
    font-size: 24px;
    line-height: 0;
    position: relative;
    top: 2px;
    margin-right: 0.25em;
  }

  & .project-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 24px;
  }

  & .project-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 18px;
  }

  & .project-item:last-child {
    margin-bottom: 0;
  }

  & .project-item img {
    width: 180px;
    min-width: 180px;
    height: auto;
    border: 1px solid #cccccc;
    background-color: #f8f8f8;
  }

  & .project-copy {
    min-width: 0;
    flex: 1;
  }

  & .section-divider {
    display: flex;
    align-items: baseline;
    gap: 10px;
    line-height: 24px;
    margin: 24px 0;
    color: rgba(0, 0, 0, 0.4);
  }

  & .section-divider-prefix {
    flex: 0 0 auto;
  }

  & .section-divider-line {
    flex: 1 1 auto;
    height: 0;
    border-top: 1px dotted rgba(0, 0, 0, 0.2);
    position: relative;
    top: -3px;
  }

  @media (max-width: 560px) {
    & .project-item {
      flex-direction: column;
    }

    & .project-item img {
      width: 100%;
      min-width: 0;
    }
  }
`;

const IndexPage: React.FC = () => (
  <Body>
    <MarkdownContent>{renderMarkdown(homeContent)}</MarkdownContent>
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

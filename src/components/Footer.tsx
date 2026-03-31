import React from "react";
import styled from "styled-components";
import { GitBranch, GitHub, Mail, Instagram, Linkedin } from "react-feather";

const StatusBar = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 6px;
`;

const StatusItem = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  gap: 6px;
  border-radius: 3px;

  &:hover {
    color: var(--accent-color);
    background: var(--highlight-color);
  }
`;

const StaticItem = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  border-radius: 3px;

  &:hover {
    color: var(--accent-color);
    background: var(--highlight-color);
  }

  & svg {
    margin-right: 4px;
    // position: relative;
    // top: 3px;
  }
`;

const iconProps = {
  size: 14,
  "aria-hidden": true,
};

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  box-shadow: 0 -6px 14px rgba(0, 0, 0, 0.08);
  font-family: "IBM Plex Sans", sans-serif;
  height: 24px;
  display: flex;
  align-items: stretch;
  & a {
    color: black;
  }

  @media (max-width: 700px) {
    ${StaticItem} {
      display: none;
    }
  }

  @media (max-width: 560px) {
    ${IconLink} {
      font-size: 0;
      padding: 0 8px;
    }

    ${IconLink} svg {
      margin-right: 0;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <StatusBar>
        <Section>
          <StatusItem href="https://github.com/aleshh/alesh-com-gatsby">
            <GitBranch size={12} aria-hidden={true} />
            main*
          </StatusItem>
          <StaticItem>UTF-8</StaticItem>
          <StaticItem>LF</StaticItem>
          <StaticItem>TSX</StaticItem>
          <StaticItem>last updated: 2026-03-31</StaticItem>
        </Section>
        <Section>
          <IconLink href="https://github.com/aleshh">
            <GitHub {...iconProps} />
            GitHub
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/alesh/">
            <Linkedin {...iconProps} />
            LinkedIn
          </IconLink>
          <IconLink href="https://www.instagram.com/alesh/">
            <Instagram {...iconProps} />
            Instagram
          </IconLink>
          <IconLink href="mailto:mail@alesh.com?subject=Mail sent from alesh.com">
            <Mail {...iconProps} />
            Email
          </IconLink>
        </Section>
      </StatusBar>
    </Wrapper>
  );
}

import React from "react";
import styled from "styled-components";
import { GitHub, Mail, Instagram, Linkedin } from "react-feather";

const IconLink = styled.a`
  padding: 0 10px 0 10px;
  font-size: 10px;
  line-height: 24px;

  & svg {
    margin-right: 4px;
    position: relative;
    top: 3px;
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
  font-family: sans-serif;
  // font-size: 7px;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  & a {
    text-decoration: none;
    color: black;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

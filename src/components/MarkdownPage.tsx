import React from "react";
import styled from "styled-components";
import { renderMarkdown } from "../utils/renderMarkdown";

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

type MarkdownPageProps = {
  content: string;
};

export default function MarkdownPage({ content }: MarkdownPageProps) {
  return <MarkdownContent>{renderMarkdown(content)}</MarkdownContent>;
}

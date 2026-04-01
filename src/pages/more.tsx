import React from "react";
import { HeadFC } from "gatsby";
import "./index.css";
import Body from "../components/Body";
import MarkdownPage from "../components/MarkdownPage";
import moreContent from "../content/more.md";

const MorePage: React.FC = () => (
  <Body>
    <MarkdownPage content={moreContent} />
  </Body>
);

export default MorePage;

export const Head: HeadFC = () => <title>More | Alesh Houdek</title>;

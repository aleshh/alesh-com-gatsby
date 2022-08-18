import React from "react";
import { HeadFC } from "gatsby";
import "./index.css";
import Body from "../components/Body";

const NotFoundPage: React.FC = () => (
  <Body>
    <h1>Page not found</h1>
    <p>¯\_(ツ)_/¯ There's not a whole lot on this site. </p>
    <p>
      Really just the <a href="/">homepage</a>.
    </p>
  </Body>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

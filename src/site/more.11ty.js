const { readContent, renderLayout, renderMarkdown } = require("./utils/renderPage");

class MorePage {
  data() {
    return {
      permalink: "/more/",
    };
  }

  render() {
    const content = readContent("more.md");

    return renderLayout({
      title: "More | Alesh Houdek",
      contentHtml: renderMarkdown(content),
    });
  }
}

module.exports = MorePage;

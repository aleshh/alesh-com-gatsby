const {
  readContent,
  renderCircleLinks,
  renderLayout,
  renderMarkdown,
} = require("./utils/renderPage");

class HomePage {
  data() {
    return {
      permalink: "/",
    };
  }

  render() {
    const content = readContent("home.md");

    return renderLayout({
      title: "Alesh Houdek",
      contentHtml: renderMarkdown(content),
      extraHtml: renderCircleLinks(),
    });
  }
}

module.exports = HomePage;

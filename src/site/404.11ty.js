const { renderLayout } = require("./utils/renderPage");

class NotFoundPage {
  data() {
    return {
      permalink: "/404.html",
    };
  }

  render() {
    return renderLayout({
      title: "Not found",
      contentHtml: "<h1>Page not found</h1><p>¯\\_(ツ)_/¯ There&#39;s not a whole lot on this site.</p><p>Really just the <a href=\"/\">homepage</a>.</p>",
    });
  }
}

module.exports = NotFoundPage;

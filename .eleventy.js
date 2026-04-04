const feather = require("feather-icons");
const { renderMarkdown } = require("./src/site/utils/renderMarkdown");

function icon(name, size) {
  return feather.icons[name].toSvg({
    width: size,
    height: size,
    "aria-hidden": "true",
    focusable: "false",
  });
}

function renderCircleLinks() {
  return `<section class="circle-links">
    <a class="circle-link" href="https://github.com/aleshh">
      ${icon("github", 14)}
      <span class="visually-hidden">GitHub</span>
    </a>
    <a class="circle-link" href="https://www.linkedin.com/in/alesh/">
      ${icon("linkedin", 14)}
      <span class="visually-hidden">LinkedIn</span>
    </a>
    <a class="circle-link" href="https://www.instagram.com/alesh/">
      ${icon("instagram", 14)}
      <span class="visually-hidden">Instagram</span>
    </a>
    <a class="circle-link" href="mailto:mail@alesh.com?subject=Mail sent from alesh.com">
      ${icon("mail", 14)}
      <span class="visually-hidden">Email</span>
    </a>
  </section>`;
}

function renderFooter() {
  return `<footer class="footer">
    <div class="status-bar">
      <div class="status-section">
        <a class="status-item" href="https://github.com/aleshh/alesh-com-gatsby">
          ${icon("git-branch", 12)}
          main*
        </a>
        <span class="static-item">UTF-8</span>
        <span class="static-item">LF</span>
        <span class="static-item">TSX</span>
        <span class="static-item">last updated: 2026-03-31</span>
      </div>
      <div class="status-section">
        <a class="footer-link" href="https://github.com/aleshh">
          ${icon("github", 14)}
          GitHub
        </a>
        <a class="footer-link" href="https://www.linkedin.com/in/alesh/">
          ${icon("linkedin", 14)}
          LinkedIn
        </a>
        <a class="footer-link" href="https://www.instagram.com/alesh/">
          ${icon("instagram", 14)}
          Instagram
        </a>
        <a class="footer-link" href="mailto:mail@alesh.com?subject=Mail sent from alesh.com">
          ${icon("mail", 14)}
          Email
        </a>
      </div>
    </div>
  </footer>`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ static: "." });
  eleventyConfig.addPassthroughCopy({ "src/site/assets": "assets" });
  eleventyConfig.addWatchTarget("src/site/");

  eleventyConfig.setLibrary("md", {
    render(input) {
      return renderMarkdown(input);
    },
    renderInline(input) {
      return renderMarkdown(input);
    },
  });

  eleventyConfig.addShortcode("lineNumbers", function () {
    return Array.from({ length: 256 }, (_, index) => {
      return `<div>${index + 1}</div>`;
    }).join("");
  });

  eleventyConfig.addShortcode("footer", renderFooter);
  eleventyConfig.addShortcode("circleLinks", renderCircleLinks);

  return {
    dir: {
      input: "src/site",
      output: "public",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: false,
  };
};

const fs = require("fs");
const path = require("path");
const feather = require("feather-icons");
const { renderMarkdown } = require("./renderMarkdown");

function readContent(filename) {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "content", filename),
    "utf8"
  );
}

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

function renderLayout(options) {
  const { title, contentHtml, extraHtml = "" } = options;
  const numbers = Array.from({ length: 256 }, (_, index) => {
    return `<div>${index + 1}</div>`;
  }).join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="stylesheet" href="/assets/site.css">
    <script type="module" src="/assets/app.js"></script>
  </head>
  <body>
    <div class="page">
      <div class="line-numbers">${numbers}</div>
      <main>
        ${contentHtml}
        ${extraHtml}
      </main>
      ${renderFooter()}
    </div>
  </body>
</html>`;
}

module.exports = {
  readContent,
  renderCircleLinks,
  renderLayout,
  renderMarkdown,
};

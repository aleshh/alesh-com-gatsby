module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ static: "." });
  eleventyConfig.addPassthroughCopy({ "src/site/assets": "assets" });
  eleventyConfig.addWatchTarget("src/content/");

  return {
    dir: {
      input: "src/site",
      output: "public",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: false,
  };
};

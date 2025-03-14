import ejsPlugin from "@11ty/eleventy-plugin-ejs";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(ejsPlugin);

  eleventyConfig.addPassthroughCopy("images/**/*")
  eleventyConfig.addPassthroughCopy("*.css")
  eleventyConfig.addPassthroughCopy("*.pdf")
  eleventyConfig.addPassthroughCopy("CNAME")
}

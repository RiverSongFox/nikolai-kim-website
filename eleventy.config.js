export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/**/*")
  eleventyConfig.addPassthroughCopy("*.css")
  eleventyConfig.addPassthroughCopy("CNAME")
}

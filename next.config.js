const readingTime = require("reading-time")
const withMdxEnhanced = require("next-mdx-enhanced")
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const defaultFrontmatter = {
  title: "Remember to add a title!",
  description: "Remember to add a description!",
  author: "Steve Ruiz",
  twitter: "@steveruizok",
  avatar: "/avatars/@steveruizok.jpg",
  hero: "/images/article.jpg",
  keywords: "design",
  date: "1/1/2020",
  location: "London",
  status: "draft",
}

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx", "md"],
  remarkPlugins: [
    require("@ngsctt/remark-smartypants"),
    require("remark-slug"),
  ],
  rehypePlugins: [require("@mapbox/rehype-prism")],
  extendFrontMatter: {
    process: (mdxContent = "", frontMatter) => {
      const matter = {
        ...defaultFrontmatter,
        ...frontMatter,
      }

      const date = new Date(matter.date)

      return {
        ...matter,
        dateTime: date.getTime(),
        date: date.toLocaleDateString("en-us", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        readingTime: readingTime(mdxContent),
        slug: "/" + matter.__resourcePath.replace(/\.mdx$/, ""),
      }
    },
    phase: "both",
  },
})(withPlugins([[optimizedImages, {}]]))

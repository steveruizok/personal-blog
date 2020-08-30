const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [require('remark-autolink-headings'), require('remark-slug')],
  rehypePlugins: [require('@mapbox/rehype-prism')],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      return {
        ...frontMatter,
        date: new Date(frontMatter.date || '1/1/2000').getTime(),
        slug: frontMatter.__resourcePath.replace(/\.mdx$/, ''),
      }
    },
    phase: 'both',
  },
})({})
